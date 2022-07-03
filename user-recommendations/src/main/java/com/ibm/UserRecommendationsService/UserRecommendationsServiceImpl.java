package com.ibm.UserRecommendationsService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.stereotype.Service;

import com.ibm.UserRecommendationsException.MatchidAlreadyExistsException;
import com.ibm.UserRecommendationsModel.RecommendationsCount;
import com.ibm.UserRecommendationsModel.UserRecommendations;
import com.ibm.UserRecommendationsRepository.UserRecommendationsRepository;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;


@Service
public class UserRecommendationsServiceImpl implements UserRecommendationsService {
	
	@Autowired
	private UserRecommendationsRepository ur;
	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public UserRecommendations saveUserRecommendations(UserRecommendations u) throws MatchidAlreadyExistsException {
		
		Optional<UserRecommendations> user = ur.findByMatchidAndUsername(u.getMatchid() ,  u.getUsername());
		if(user.isPresent()) {
			throw new MatchidAlreadyExistsException("MatchId already exits!");
		}
		return ur.save(u);
	}

	public List<UserRecommendations> getAllUserRecommendations() {
		return ur.findAll();
	}

	@Override
	public List<RecommendationsCount> getRecommendationsCount() {
		Aggregation agg = newAggregation(group("matchid").count().as("total"),
				project("total").and("matchid").previousOperation(), sort(Sort.Direction.DESC, "total"));
		// Convert the aggregation result into a List
		AggregationResults<RecommendationsCount> groupResults = mongoTemplate.aggregate(agg, UserRecommendations.class,
				RecommendationsCount.class);
		return groupResults.getMappedResults();
	}

	@Override
	public List<UserRecommendations> getByMatchid(int matchid) {
		return ur.findByMatchid(matchid);
	}
}