//package com.ibm.UserController;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//@CrossOrigin(origins = "*", allowedHeaders = "*")
//@RestController("/authenticate")
//public class JwtAuthenticationController {
//	private static Logger logger = LoggerFactory.getLogger(JwtAuthenticationController.class);
//	@GetMapping("/")
//	public ResponseEntity<?> getUser(){
//		logger.info("Inside the Jwt authentication getUser() method");
//		return new ResponseEntity<String>("Protected Resource:"
//				+ "Details of User ",HttpStatus.OK );	
//	}
//}