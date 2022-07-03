package com.ibm.UserRemindersRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ibm.UserRemindersModel.UserReminders;


@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface UserRemindersRepository extends MongoRepository<UserReminders, Integer> {
//	public void deleteByIdAndUsername(int id, String username);
	public void deleteByMatchidAndUsername(int matchid, String username);

	public Optional<UserReminders> findByUsernameAndMatchid(String username, int matchid);

	public void deleteByMatchid(int matchid);

	public Optional<UserReminders> findByMatchid(int matchid);

	public boolean existsByMatchid(int matchid);

	public List<UserReminders> findByUsername(String username);
}