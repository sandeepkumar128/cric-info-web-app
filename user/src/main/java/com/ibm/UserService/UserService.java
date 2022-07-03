package com.ibm.UserService;

import com.ibm.UserException.UserAlreadyExistsException;
import com.ibm.UserException.UserNotFoundException;
import com.ibm.UserModel.User;

public interface UserService {
	public User login(String email , String password) throws UserNotFoundException;
	public User findByEmailAndPassword(String email, String password);
	public User findByEmail(String email);
	public User findByName(String email);
	public User saveUser(User u) throws UserAlreadyExistsException;
}