package com.ibm.UserModel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userDetails1")
public class User {

	@Id
	private String email;
	
	private String name;
	private String password;

	@Column(length=100000000 , columnDefinition = "mediumtext")
	private String profilePic;
	
	public User() {
		
	}
		
	public User(String email, String name, String password, String profilePic) {
		this.email = email;
		this.name = name;
		this.password = password;
		this.profilePic = profilePic;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}
	
	@Override
	public String toString() {
		return "User [email=" + email + ", name=" + name + ", password=" + password + ", profilePic="
				+ profilePic + "]";
	}
}
