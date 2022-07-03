package com.ibm.UserRemindersService;

import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.Assert.assertEquals;

import com.ibm.UserRemindersException.MatchidAlreadyExistsException;
import com.ibm.UserRemindersModel.*;
import com.ibm.UserRemindersRepository.*;
import com.ibm.UserRemindersService.*;
@RunWith(MockitoJUnitRunner.class)
public class UserRemindersServiceImplTest {
	@Mock
	private UserRemindersRepository userRemindersRepository;
	
	@InjectMocks
	private UserRemindersServiceImpl service;
	UserReminders reminders;
	Optional<UserReminders> optReminders;
	@Before
	public void setUp() throws Exception {
		reminders = new UserReminders(1187029, "India", "Australia", "19/01/2020", false, "ODI", "", "n@gmail.com");
				optReminders = Optional.of(reminders);
	}
	
	@After
	public void tearDown() throws Exception {
	}
	
	@Test(expected = MatchidAlreadyExistsException.class)
	public void testAddReminderFailure() throws MatchidAlreadyExistsException {
		when(userRemindersRepository.findByUsernameAndMatchid(Mockito.anyString(),Mockito.anyInt())).
				thenReturn(optReminders);
		service.saveUserReminders(reminders);
		verify(userRemindersRepository).findByUsernameAndMatchid(Mockito.anyString(),Mockito.anyInt());
	}
	
	@Test
	public void testAddReminderSuccess() throws MatchidAlreadyExistsException {
		// BookRepository repo = Mockito.mock(BookRepository.class);
		when(userRemindersRepository.findByUsernameAndMatchid(Mockito.anyString(),Mockito.anyInt())).
					thenReturn(Optional.empty());
		when(userRemindersRepository.save(Mockito.any(UserReminders.class))).
					thenReturn(reminders);
		UserReminders addedReminder = service.saveUserReminders(reminders);
		assertEquals(reminders.getMatchid(), addedReminder.getMatchid());
		verify(userRemindersRepository).findByUsernameAndMatchid(Mockito.anyString(),Mockito.anyInt());
		verify(userRemindersRepository).save(Mockito.any());
	}
}