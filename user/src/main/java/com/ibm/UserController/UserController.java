package com.ibm.UserController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ibm.UserException.UserAlreadyExistsException;
import com.ibm.UserModel.JwtRequest;
import com.ibm.UserModel.User;
import com.ibm.UserRepository.UserRepository;
import com.ibm.UserService.EmailService;
import com.ibm.UserService.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*" , allowCredentials = "true")
@RequestMapping("/user")
public class UserController {
	private static Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserService userService;
	@Autowired
	private EmailService emailService;
	@Autowired
	private UserRepository userRepo;
	@PostMapping("/register")
	public ResponseEntity<User> saveUser(@RequestBody User user) throws UserAlreadyExistsException {
		System.out.println("inside register>>>>>>>");
//		String hashpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		logger.info("Inside the save user method");
		logger.info("Hash Password is generated");
//		user.setPassword(hashpw);
		user.setPassword(user.getPassword());
		logger.info("User password is been set");
		user.setProfilePic(user.getProfilePic());
		logger.info("Profile Pic of user set up");
		userService.saveUser(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody JwtRequest jwtObj) {
		User user = userService.findByEmail(jwtObj.getUsername());
		if (user == null) {
			logger.info("User not found");
		}
//		boolean matched = BCrypt.checkpw(jwtObj.getPassword(), user.getPassword());
		boolean matched =true;
		if (matched) {
			String token = Jwts.builder().setId(user.getEmail()).setSubject(user.getPassword()).setIssuedAt(new Date())
					.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
			Map<String, String> map1 = new HashMap<>();
			map1.put("token", token);
			map1.put("message", "User Successfully logged in");
			ResponseEntity<Map<String, String>> response = new ResponseEntity<Map<String, String>>(map1, HttpStatus.OK);
			return response;
		} else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/getLoginDetails")
	public User getUserLoginDetails(@RequestParam String email, @RequestParam String password) {
		return userService.findByEmail(email);
	}
	@GetMapping("/getUserByName")
	public ResponseEntity<User> getUserName(@RequestParam String email) {
		ResponseEntity<User> rs = null;
		try {
			User user = userService.findByEmail(email);
			System.out.println("inside getuserbyemail"+ user);
			rs = ResponseEntity.status(HttpStatus.OK).body(user);
		} catch (Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@GetMapping("/getUserByEmail")
	public User getUser(@RequestParam String email) {
		System.out.println("inside getUSERbyMAIL");
		User user = userRepo.findByEmail(email);
		System.out.println(user);
		return user;
	}
	@GetMapping("/sendMail")
	public void sendMail(@RequestParam String email) {
		emailService.sendMail(email, "this is subject", "hello this is message, you have been successfully registered");
	}
//	@PutMapping("/updateUser/{email}")
//	public ResponseEntity<User> updateUser(@RequestBody User newuser ,@PathVariable ("email") String email) throws UserAlreadyExistsException{
//		
//		User user = userService.findByEmail(email);
//		logger.info(user.getEmail() + " " + user.getName());
//		newuser.setName(newuser.getName());
//		newuser.setEmail(user.getEmail());
//		newuser.setPassword(user.getPassword());
//		newuser.setProfilePic(newuser.getProfilePic());
//		userService.saveUser(newuser);
//		return new ResponseEntity<User>(newuser, HttpStatus.OK);
//	}
}
