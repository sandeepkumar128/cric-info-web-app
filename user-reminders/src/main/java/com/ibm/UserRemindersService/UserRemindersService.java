package com.ibm.UserRemindersService;
import java.util.List;

import com.ibm.UserRemindersException.MatchidAlreadyExistsException;
import com.ibm.UserRemindersException.UsernameNotFoundException;
import com.ibm.UserRemindersModel.UserReminders;


public interface UserRemindersService {
	public UserReminders saveUserReminders(UserReminders u) throws MatchidAlreadyExistsException;

	public List<UserReminders> getAllUserReminders();

	public List<UserReminders> findByUsername(String username) throws UsernameNotFoundException;

	public void deleteByMatchidAndUsername(int matchid, String username);
}