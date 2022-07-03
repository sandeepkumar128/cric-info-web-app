package com.ibm.UserRecommendationsModel;

import java.util.List;
public class RecommendationsCount {
	private int matchid;
	private long total;
	private List<String> userids;
	private UserRecommendations rdetails;
	private List<String> usernames;
	public int getMatchid() {
		return matchid;
	}
	public void setMatchid(int matchid) {
		this.matchid = matchid;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public List<String> getUserids() {
		return userids;
	}
	public void setUserids(List<String> userids) {
		this.userids = userids;
	}
	public UserRecommendations getRdetails() {
		return rdetails;
	}
	public void setRdetails(UserRecommendations rdetails) {
		this.rdetails = rdetails;
	}
	public List<String> getUsernames() {
		return usernames;
	}
	public void setUsernames(List<String> usernames) {
		this.usernames = usernames;
	}
	public RecommendationsCount(int matchid, long total, List<String> userids, UserRecommendations rdetails,
			List<String> usernames) {
		super();
		this.matchid = matchid;
		this.total = total;
		this.userids = userids;
		this.rdetails = rdetails;
		this.usernames = usernames;
	}
	public RecommendationsCount() {
		super();
	}
}