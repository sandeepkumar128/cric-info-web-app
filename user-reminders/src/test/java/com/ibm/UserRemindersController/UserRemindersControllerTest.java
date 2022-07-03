package com.ibm.UserRemindersController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;

import com.ibm.UserRemindersException.UsernameNotFoundException;
import com.ibm.UserRemindersModel.*;
import com.ibm.UserRemindersRepository.*;
import com.ibm.UserRemindersService.*;
import java.util.List;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserRemindersController.class)
public class UserRemindersControllerTest {
	//Sending request to controller
		@Autowired
		private MockMvc mockMvc;
		@MockBean
		private UserRemindersService service;
		//private List<UserReminders> reminders;
		private  UserReminders reminders;
		@Before
		public void setUp() throws Exception {
			reminders = new UserReminders(1187029, "India", "Australia", "19/01/2020", false, "ODI", "", "n@gmail.com");
			reminders = null;
		}
		@After
		public void tearDown() throws Exception {
		}
		@Test
		public void testGetReminderSuccess() throws Exception {
			when(service.findByUsername(Mockito.anyString())).
					thenReturn((List<UserReminders>) reminders);
			mockMvc.perform(get("/userReminders/getUserReminders/n@gmail.com"))
					.andExpect(status().isOk())
					//.andExpect(jsonPath("$.matchid", is(1187029)))
					.andDo(print());
			verify(service,times(1)).findByUsername(Mockito.anyString());
		}
		@Test
		public void testGetReminderFailure() throws Exception {
			//When a call is given to service.getBook
			when(service.findByUsername(Mockito.anyString())).
					thenThrow(UsernameNotFoundException.class);
			mockMvc.perform(get("/userReminders/getUserReminders/niv@gmail.com"))
					.andExpect(status().isConflict())
					.andDo(print());
			verify(service).findByUsername(Mockito.anyString());
		}
		
		@Test
		public void testAddReminderSuccess() throws Exception{
			//setup the service mock
			when(service.saveUserReminders(Mockito.any(UserReminders.class))).thenReturn(reminders);
			//send a post request using mockMVC
			String remindersJson = new ObjectMapper().writeValueAsString( reminders);
			mockMvc.perform(post("/userReminders/saveUserReminders")
							.contentType(MediaType.APPLICATION_JSON)
							.content(remindersJson))
			.andExpect(status().isBadRequest());
			//verify mock has been called
//			verify(service).saveUserReminders(Mockito.any(UserReminders.class));
//			verifyNoMoreInteractions(service);
		}
		
		@Test
		public void deleteByMatchidAndUsernameTestSuccess() throws Exception {
			String userJson = new ObjectMapper().writeValueAsString(reminders);
			mockMvc.perform(delete("/userReminders/deleteByIdAndUsername?matchid=1187029&username=n@gmail.com")
					.contentType(MediaType.APPLICATION_JSON)
					.content(userJson))
					.andExpect(status().isOk()).andDo(print());
			verify(service).deleteByMatchidAndUsername(Mockito.anyInt(), Mockito.anyString());
		}
}