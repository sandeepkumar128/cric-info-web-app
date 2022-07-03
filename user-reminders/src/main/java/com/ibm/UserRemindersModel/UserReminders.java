package com.ibm.UserRemindersModel;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userReminders")
public class UserReminders {
	private int matchid;
	private String team1;
	private String team2;
	private String dateTimeGMT;
	private Boolean matchStarted;
	private String type;
	private String winner_team;
	private String username;


	public UserReminders() {
		super();
	}

	public UserReminders(int matchid, String team1, String team2, String dateTimeGMT, Boolean matchStarted, String type,
			String winner_team, String username) {
		super();
		this.matchid = matchid;
		this.team1 = team1;
		this.team2 = team2;
		this.dateTimeGMT = dateTimeGMT;
		this.matchStarted = matchStarted;
		this.type = type;
		this.winner_team = winner_team;
		this.username = username;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getWinner_team() {
		return winner_team;
	}

	public void setWinner_team(String winner_team) {
		this.winner_team = winner_team;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getMatchid() {
		return matchid;
	}

	public void setMatchid(int matchid) {
		this.matchid = matchid;
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

	public String getDateTimeGMT() {
		return dateTimeGMT;
	}

	public void setDateTimeGMT(String dateTimeGMT) {
		this.dateTimeGMT = dateTimeGMT;
	}

	public Boolean getMatchStarted() {
		return matchStarted;
	}

	public void setMatchStarted(Boolean matchStarted) {
		this.matchStarted = matchStarted;
	}
}
