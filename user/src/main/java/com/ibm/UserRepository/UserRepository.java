package com.ibm.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.UserModel.User;

public interface UserRepository extends JpaRepository<User, String> {
	//this would automatically create a method
	public User findByEmailAndPassword(String email, String password);
	public User findByEmail(String email);
	public User findByName(String email);
}