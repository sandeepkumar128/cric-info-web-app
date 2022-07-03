package com.ibm.UserController;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.codehaus.jackson.map.ObjectMapper;
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
import com.ibm.UserModel.*;
import com.ibm.UserRepository.UserRepository;
import com.ibm.UserService.*;
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private UserService service;
	@MockBean
	private UserRepository userRepo;
	@MockBean
	private EmailService emailService;
	private User user;
	@Before
	public void setUp() throws Exception {
		user = new User("puji@gmail.com","pujitha", "12345" , " ");
	}
	@After
	public void tearDown() throws Exception {
	}
	@Test
	public void testGetUserSuccess() throws Exception {
		when(service.saveUser(Mockito.any(User.class))).
				thenReturn(user);
		String userjson=new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/user/register").contentType(MediaType.APPLICATION_JSON)
				.content(userjson)).andExpect(status().isOk());
		verify(service,times(1)).saveUser(Mockito.any(User.class));
	}
	@Test
	public void testLogin() throws Exception {
		User user = null;
		when(service.login(Mockito.anyString(),Mockito.anyString())).thenReturn(user);
		String userJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/user/login").contentType(MediaType.APPLICATION_JSON)
				.content(userJson))
		.andExpect(status().isBadRequest());
	}
	@Test
	public void getUserNameSuccessTestCase() throws Exception{
		when(service.findByName("puji@gmail.com")).thenReturn(user);
		mockMvc.perform(get("/user/getUserByName").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isBadRequest());
	}
	@Test(expected=Exception.class)
	public void getUserNameFailureTestCase() throws Exception{
		when(service.findByName("puji@gmail.com")).thenReturn(null).thenThrow(Exception.class);
		mockMvc.perform(get("/user/getUserByName")
				.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isConflict());
		verify(service,times(1)).saveUser(Mockito.any(User.class));
	}
}