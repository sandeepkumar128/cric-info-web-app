package com.ibm.UserRecommendationsService;

import java.util.List;

import com.ibm.UserRecommendationsException.MatchidAlreadyExistsException;
import com.ibm.UserRecommendationsModel.RecommendationsCount;
import com.ibm.UserRecommendationsModel.UserRecommendations;

public interface UserRecommendationsService {
	
	public UserRecommendations saveUserRecommendations(UserRecommendations u) throws MatchidAlreadyExistsException;

	public List<UserRecommendations> getAllUserRecommendations();

	public List<RecommendationsCount> getRecommendationsCount();

	public List<UserRecommendations> getByMatchid(int matchid);

}
