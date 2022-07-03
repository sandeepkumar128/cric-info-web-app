package com.ibm.UserRemindersService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.UserRemindersException.MatchidAlreadyExistsException;
import com.ibm.UserRemindersException.UsernameNotFoundException;
import com.ibm.UserRemindersModel.UserReminders;
import com.ibm.UserRemindersRepository.UserRemindersRepository;

@Service
public class UserRemindersServiceImpl implements UserRemindersService {
	@Autowired
	public UserRemindersRepository ur;

	@Override
	public UserReminders saveUserReminders(UserReminders u1) throws MatchidAlreadyExistsException {
		Optional<UserReminders> reminders = ur.findByUsernameAndMatchid(u1.getUsername(), u1.getMatchid());
		if (reminders.isPresent()) {
			throw new MatchidAlreadyExistsException("MatchId already exits!");
		}
		UserReminders userRemind = ur.save(u1);
		return userRemind;
	}
	
//	@Override
//	public UserReminders saveUserReminders(UserReminders u1) throws MatchidAlreadyExistsException {
//		
//		Optional<UserReminders> user = ur.findByMatchidAndUsername(u1.getMatchid() ,  u1.getUsername());
//		if(user.isPresent()) {
//			throw new MatchidAlreadyExistsException("MatchId already exits!");
//		}
//		return ur.save(u1);
//	}


	@Override
	public List<UserReminders> getAllUserReminders() {
		try {
			return ur.findAll();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<UserReminders> findByUsername(String username) throws UsernameNotFoundException {
//		Optional<UserReminders> o=ur.findByUsername(username);
//		UserReminders b=null;
//		if(o.isPresent())
//			b=o.get();
//		else throw new UsernameNotFoundException();
//		return b;
		return ur.findByUsername(username);
	}

//	@Override
//	public void deleteByMatchidAndUsername(int matchid, String username) {
//		// TODO Auto-generated method stub
//		
//	}


	
	@Override
	public void deleteByMatchidAndUsername(int matchid, String username) {
		Optional<UserReminders> opt = ur.findByUsernameAndMatchid(username, matchid);
		System.out.println("in delete");
		UserReminders b = null;
		if (opt.isPresent())
//			ur.deleteByMatchid(delId.getMatchid());
			ur.deleteByMatchidAndUsername(matchid, username);
//		System.out.println(delId);
	}

}