package com.ibm.UserRecommendationsController;

import java.util.ArrayList;
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

//import com.ibm.UserRecommendationsModel.*;
import com.ibm.UserRecommendationsModel.*;
import com.ibm.UserRecommendationsRepository.*;
import com.ibm.UserRecommendationsService.*;


@CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/recommendations")
public class UserRecommendationsController {
	@Autowired
	private UserRecommendationsService us;
	@Autowired
	private UserRecommendationsRepository urr;
	
	//save  users recommendations details
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/saveUserRecommendations")
	public ResponseEntity<?> saveUserRecommendations(@RequestBody  UserRecommendations  u){
		ResponseEntity<?> rs = null;
		try {
			UserRecommendations bk = us.saveUserRecommendations(u);
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
	

	//fetch all user recommendations
			@GetMapping("/getAllUserRecommendations")
			public ResponseEntity<?> getAllUserRecommendations(){
				ResponseEntity<?> rs=null;
				try {
					List<UserRecommendations> b = us.getAllUserRecommendations();
					rs=ResponseEntity.status(HttpStatus.OK).body(b);
				}
				catch(Exception e) {
					rs=ResponseEntity.status(HttpStatus.CONFLICT).build();			
				}
				return rs;
			}
			
	//fetch a particular user recommendation	by using service	
//			@GetMapping("/getUserRecommendations/{username}")
//			public ResponseEntity<?> getUserRecommendations(@PathVariable("username") String username){
//				ResponseEntity<?> rs=null;
//				try {
//					System.out.println("lol");
//					List<UserRecommendations> b = us.getUserRecommendations(username);
//					for(UserRecommendations us: b) {
//						System.out.println("lol");
//						System.out.println(us);
//					}
//					rs=ResponseEntity.status(HttpStatus.OK).body(b);
//				}
//				catch(Exception e) {
//					e.printStackTrace();
//					rs=ResponseEntity.status(HttpStatus.CONFLICT).build();			
//				}
//				return rs;
//			}
			
			//fetch a user data with mongorepository
			@GetMapping("/getUserRecommendations/{username}")
			public ResponseEntity<?> getUserRecommendations(@PathVariable("username") String username){
				ResponseEntity<?> rs=null;
				try {
					List<UserRecommendations> userList = urr.findByUsername(username);
					rs=ResponseEntity.status(HttpStatus.OK).body(userList);
				}
				catch(Exception e) {
					rs=ResponseEntity.status(HttpStatus.CONFLICT).build();			
				}
				return rs;
			}
			
			//deleteByID and username from mongo
			@DeleteMapping("/deleteByMatchidAndUsername")
			public ResponseEntity<?> deleteByMatchidAndUsername(@RequestParam int matchid,@RequestParam String username){
				ResponseEntity<?> rs=null;
				try {
					urr.deleteByMatchidAndUsername(matchid, username);
					rs=ResponseEntity.status(HttpStatus.OK).build();
				}
				catch(Exception e) {
				rs=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
				}
				return rs;
			}
			
			@GetMapping("/count")
			public ResponseEntity<?> getCountPlayer() {
				List<RecommendationsCount> p = us.getRecommendationsCount();
				System.out.println(p);
				for (int i = 0; i < p.size(); i++) {
					System.out.println(p.get(i));
					List<UserRecommendations> l = us.getByMatchid(p.get(i).getMatchid());
					List<String> userids = new ArrayList<>();
					for (UserRecommendations myP : l) {
						userids.add(myP.getUsername());
					}
					p.get(i).setUserids(userids);
					p.get(i).setRdetails(l.get(0));
				}
				if (p.size() > 0) {
					return new ResponseEntity<List<RecommendationsCount>>(p, HttpStatus.OK);
				}
				return new ResponseEntity<List<UserRecommendations>>(HttpStatus.NO_CONTENT);
			}
			
}
