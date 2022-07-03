package com.ibm.UserRecommendationsRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ibm.UserRecommendationsModel.UserRecommendations;;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface UserRecommendationsRepository extends MongoRepository<UserRecommendations, Integer> {
	// create non-inbuilt functions here
	// like findByBookName
	public List<UserRecommendations> findByUsername(String username);

//	public void deleteByIdAndUsername(int id, String username);
	public void deleteByMatchidAndUsername(int matchid, String username);

	public Optional<UserRecommendations> findByMatchidAndUsername(int matchid, String username);

	public List<UserRecommendations> findByMatchid(int matchid);
//	public List<UserRecommendations> findByMatchid(int matchid);
}
