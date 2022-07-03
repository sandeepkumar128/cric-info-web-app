package com.ibm.UserRecommendationsService;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ibm.UserRecommendationsException.MatchidAlreadyExistsException;
import com.ibm.UserRecommendationsModel.*;
import com.ibm.UserRecommendationsRepository.*;
import com.ibm.UserRecommendationsService.*;

@RunWith(MockitoJUnitRunner.class)
public class UserRecommendationsServiceImplTest {
	@Mock
	private UserRecommendationsRepository userRecRepository;
	@InjectMocks
	private UserRecommendationsServiceImpl service;

	UserRecommendations userRec;
	Optional<UserRecommendations> optUser;
	List<UserRecommendations> list;
	@Before
	public void setUp() throws Exception {
		userRec = new UserRecommendations(12345,"India","England","2020-01-20","India","ODI","alpha");
		optUser = Optional.of(userRec);
//		userRec = new UserRecommendations(12346,"India","Sri Lanka","2020-01-22","India","ODI","alpha");
//		list.add(userRec);
	}
	@After
	public void tearDown() throws Exception {
	}
	
	@Test(expected = MatchidAlreadyExistsException.class)
	public void testSaveUserRecommendationsFailure() throws MatchidAlreadyExistsException {
		when(userRecRepository.findByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString())).
				thenReturn(optUser);
		service.saveUserRecommendations(userRec);
		verify(userRecRepository).findByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString());
	}
	
	@Test
	public void testSaveUserRecommendationsSuccess() throws MatchidAlreadyExistsException {
		
		when(userRecRepository.findByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString())).
					thenReturn(Optional.empty());
		when(userRecRepository.save(Mockito.any())).
					thenReturn(userRec);
		UserRecommendations addedUserRec = service.saveUserRecommendations(userRec);
		assertEquals(userRec.getUsername(), addedUserRec.getUsername());
		verify(userRecRepository).findByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString());
		verify(userRecRepository).save(Mockito.any());
	}
	
	@Test
	public void testGetByMatchIdSuccess() throws Exception {
		when(userRecRepository.findByMatchid(Mockito.anyInt())).thenReturn(list);
		List<UserRecommendations> listUser = service.getByMatchid(Mockito.anyInt());
		verify(userRecRepository).findByMatchid(Mockito.anyInt());
}
	
}
