package com.ibm.UserRecommendationsModel;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="userRecommendations2")
public class UserRecommendations {

	private int matchid;
	private String team1;
	private String team2;
	private String date;
	private String winner;
	private String type;
	private String username;
	public UserRecommendations() {
		super();
	}
	public int getMatchid() {
		return matchid;
	}
	public String getTeam1() {
		return team1;
	}
	public void setTeam1(String team1) {
		this.team1 = team1;
	}
	public String getTeam2() {
		return team2;
	}
	public void setTeam2(String team2) {
		this.team2 = team2;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getWinner() {
		return winner;
	}
	public void setWinner(String winner) {
		this.winner = winner;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setMatchid(int matchid) {
		this.matchid = matchid;
	}
	public UserRecommendations(int matchid, String team1, String team2, String date, String winner, String type,
			String username) {
		super();
		this.matchid = matchid;
		this.team1 = team1;
		this.team2 = team2;
		this.date = date;
		this.winner = winner;
		this.type = type;
		this.username = username;
	}
}

