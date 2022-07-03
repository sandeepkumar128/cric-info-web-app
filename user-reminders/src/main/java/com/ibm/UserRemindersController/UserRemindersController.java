package com.ibm.UserRemindersController;
import java.io.Console;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.UserRemindersModel.UserReminders;
import com.ibm.UserRemindersRepository.UserRemindersRepository;
import com.ibm.UserRemindersService.UserRemindersService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/userReminders")
public class UserRemindersController {
	@Autowired
	public UserRemindersService urs;
	public UserRemindersRepository urr;
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/saveUserReminders")
	public ResponseEntity<?> saveUserReminders(@RequestBody  UserReminders ur){
		ResponseEntity<?> rs = null;
		try {
			UserReminders bk = urs.saveUserReminders(ur);
			if(bk!=null)
			{
				rs = ResponseEntity.status(HttpStatus.CREATED).build();	
			}
			else
			{
				rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		catch(Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@GetMapping("/getAllUserReminders")
	public ResponseEntity<?> getAllUserReminders(){
		System.out.println("GET user reminders");
		ResponseEntity<?> rs=null;
		try {
			System.out.println("TRY");
			List<UserReminders> b = urs.getAllUserReminders();
			System.out.println("size: " + b.size());
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e) {
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();			
		}
		return rs;
	}
	@GetMapping("/getUserReminders/{username}")
	public ResponseEntity<?> getUserReminders(@PathVariable("username") String username) {
		ResponseEntity<?> rs = null;
		try {
			List<UserReminders> b = urs.findByUsername(username);
//			UserReminders userRem = urs.findById(username);
//			System.out.println("inside try"+b.getMatchid());
			rs = ResponseEntity.status(HttpStatus.OK).body(b);
		} catch (Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@DeleteMapping("/deleteByIdAndUsername")
	public ResponseEntity<?> deleteByMatchidAndUsername(@RequestParam int matchid,@RequestParam String username){
		ResponseEntity<?> rs=null;
		System.out.println("nivi");
		try {
			System.out.println("hii");
			urs.deleteByMatchidAndUsername(matchid, username);
			System.out.println("nivi");
			rs=ResponseEntity.status(HttpStatus.OK).build();
			System.out.println("hello");
		}
		catch(Exception e) {
		rs=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return rs;
	}
}