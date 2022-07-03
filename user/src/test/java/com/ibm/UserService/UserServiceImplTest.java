package com.ibm.UserService;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ibm.UserException.UserAlreadyExistsException;
import com.ibm.UserModel.*;
import com.ibm.UserRepository.*;
import com.ibm.UserService.*;
@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {
	@Mock
	private UserRepository userRepository;
	@InjectMocks
	private UserServiceImpl service;
	User user;
	Optional<User> optUser;
	@Before
	public void setUp() throws Exception {
		//name , email , password , profilePic
		//(String email, String name, String password, String profilePic)
		user = new User("pujitha123@gmail.com" , "pujitha" , "12345" , " ");
		optUser = Optional.of(user);
	}
	@After
	public void tearDown() throws Exception {}
	@Test
	public void testLogin() throws UserAlreadyExistsException{
		when(userRepository.findByEmail(Mockito.anyString())).thenReturn(user);
		service.saveUser(user);
		verify(userRepository).findByEmail(Mockito.anyString());	
	}
	@Test(expected = Exception.class)
	public void testAddUserSuccess() throws Exception {	
		when(userRepository.findByEmail(Mockito.anyString())).
			thenReturn(user);
		User addUser = service.saveUser(user);
		assertEquals(user.getEmail() , addUser.getEmail());
		verify(userRepository).findByEmail(Mockito.anyString());
		verify(userRepository).save(Mockito.any());
	}
}