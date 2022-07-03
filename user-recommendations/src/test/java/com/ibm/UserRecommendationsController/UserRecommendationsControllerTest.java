package com.ibm.UserRecommendationsController;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.ibm.UserRecommendationsModel.*;
import com.ibm.UserRecommendationsRepository.*;
import com.ibm.UserRecommendationsService.*;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserRecommendationsController.class)
public class UserRecommendationsControllerTest {
	//Sending request to controller
		@Autowired
		private MockMvc mockMvc;
		@MockBean
		private UserRecommendationsService service;
		@MockBean	
		private UserRecommendationsRepository repository;
		
		List<UserRecommendations> userRecList;
		List<RecommendationsCount> recCountList;
		UserRecommendations userRec;
		RecommendationsCount recCount;
		@Before
		public void setUp() throws Exception {
			userRecList = new ArrayList<>();
			userRec = new UserRecommendations(12345,"India", "Pakistan","2020-01-20","India","ODI","sachin");
				userRecList.add(userRec);
				userRec = new UserRecommendations(12346,"India", "England","2020-01-15","England","Test","rahul");
				userRecList.add(userRec);	
				
		}
		@After
		public void tearDown() throws Exception {
		}

		
		@Test
		public void getUserRecommendationsSuccess() throws Exception{
//			String username = "sachin";
//			when(repository.findByUsername(username)).thenReturn(userRecList);
//			mockMvc.perform(get("user/getUserRecommendations","sachin"))
//			.andExpect(status().isOk())
//			.andExpect(jsonPath("$.name", is("Testing with Mockito")))
//			.andDo(print());
//			verify(repository).findByUsername(Mockito.anyString());
			when(repository.findByUsername(Mockito.anyString())).thenReturn(userRecList);
	mockMvc.perform(get("/recommendations/getUserRecommendations/sachin"))
			.andExpect(status().isOk())
//			.andExpect(jsonPath("$.username", is("Testing with Mockito")))
			.andDo(print());
	verify(repository,times(1)).findByUsername(Mockito.anyString());
			
		}
		@Test
		public void getUserRecommendationsFailure() throws Exception{
			when(repository.findByUsername(Mockito.anyString())).thenReturn(null);
	mockMvc.perform(get("/recommendations/getUserRecommendations/malinga"))
			.andExpect(status().isOk())
			.andDo(print());
	verify(repository,times(1)).findByUsername(Mockito.anyString());
			
		}
		
		@Test
		public void saveUserRecommendationsTestSuccess() throws Exception {
			//setup the service mock
			when(service.saveUserRecommendations(Mockito.any(UserRecommendations.class))).thenReturn(userRec);
			//send a post request using mockMVC
			String userJson = new ObjectMapper().writeValueAsString(userRec);
			mockMvc.perform(post("/recommendations/saveUserRecommendations")
							.contentType(MediaType.APPLICATION_JSON)
							.content(userJson))
			.andExpect(status().isCreated());
			//verify mock has been called
			verify(service).saveUserRecommendations(Mockito.any(UserRecommendations.class));
			verifyNoMoreInteractions(service);
		}
//		@Test
//		public void saveUserRecommendationsTestFailure() throws Exception{
//			when(service.saveUserRecommendations(Mockito.any(UserRecommendations.class))).thenReturn(null);
//			String userJson = new ObjectMapper().writeValueAsString(userRec);
//			mockMvc.perform(post("/user/saveUserRecommendations")	
//					.contentType(MediaType.APPLICATION_JSON)
//					.content(userJson)
//					.andExpect(status().isInternalServerError()).andDo(print()));
//			verify(service).saveUserRecommendations(Mockito.any());
//		}
		@Test
		public void saveUserRecommendationsTestFailure() throws Exception {
			when(service.saveUserRecommendations(Mockito.any(UserRecommendations.class))).thenReturn(null);
			String userJson = new ObjectMapper().writeValueAsString(userRec);
			mockMvc.perform(post("/recommendations/saveUserRecommendations")
							.contentType(MediaType.APPLICATION_JSON)
							.content(userJson))
			.andExpect(status().isInternalServerError()).andDo(print());
			verify(service).saveUserRecommendations(Mockito.any(UserRecommendations.class));
			verifyNoMoreInteractions(service);
		}
		
//		@Test
//		public void deleteByMatchidAndUsernameTestSuccess() throws Exception {
//			String username="sachin";
//			int matchid=12345;
//			Mockito.when(repository.deleteByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString()))
//			when(repository.deleteByMatchidAndUsername(matchid,username)).thenReturn("helllo");
//			mockMvc.perform(delete("/user/deleteByMatchidAndUsername")
//					.param("matchid",matchid)
//					.param("username",username)
//					.andExpect(status().isOk()).andDo(print()));
//			verify(repository).deleteByMatchidAndUsername(Mockito.any(), Mockito.any());
//			
//		}

		
		@Test
		public void deleteByMatchidAndUsernameTestSuccess() throws Exception {
			String userJson = new ObjectMapper().writeValueAsString(userRec);
			mockMvc.perform(delete("/recommendations/deleteByMatchidAndUsername?matchid=12345&username=sachin")
					.contentType(MediaType.APPLICATION_JSON)
					.content(userJson))
					.andExpect(status().isOk()).andDo(print());
			verify(repository).deleteByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString());
			
		}
		
		@Test
		public void deleteByMatchidAndUsernameTestFailure() throws Exception {
			String userJson = new ObjectMapper().writeValueAsString(userRec);
			mockMvc.perform(delete("/recommendations/deleteByMatchidAndUsername?matchid=1&username=xyz")
					.contentType(MediaType.APPLICATION_JSON)
					.content(userJson))
					.andExpect(status().isOk()).andDo(print());
			System.out.println("heloooooooooooooooooooo");
			verify(repository).deleteByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString());
			
		}
		
//		@Test	
//		public void getCountPlayerTest() throws Exception{
////			when(repository.findByUsername(Mockito.anyString())).thenReturn(userRecList);
//	mockMvc.perform(get("/user/count"))
//			.andExpect(status().isOk())
//			.andDo(print());
//	verify(repository,times(1)).findByUsername(Mockito.anyString());
//			
//		}
			
		

}
