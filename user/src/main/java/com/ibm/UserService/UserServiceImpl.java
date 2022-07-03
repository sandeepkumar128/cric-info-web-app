package com.ibm.UserService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import com.ibm.UserException.UserAlreadyExistsException;
import com.ibm.UserException.UserNotFoundException;
import com.ibm.UserModel.User;
import com.ibm.UserRepository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
//	@Override
//	public User login(String email, String password) throws UserNotFoundException {
//		Optional<User> userSearch = userRepo.findById(email);
//		User user = null;
//		if (userSearch.isPresent()) {
//			user = userSearch.get();
//			boolean matched = BCrypt.checkpw(password, user.getPassword());
//			if (!matched) {
//				user = null;
//			}
//		} else
//			throw new UserNotFoundException();
//		return user;
//	}
	@Override
	public User saveUser(User u) throws UserAlreadyExistsException {
		User user = userRepo.findByEmail(u.getEmail());
		//if (user.isPresent()) {
			return userRepo.save(u);
		//}
		//else
			//throw new UserAlreadyExistsException();
		//return userRepo.save(u);
	}
	@Override
	public User findByEmailAndPassword(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}
	@Override
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	@Override
	public User findByName(String email) {
		return userRepo.findByName(email);
	}
	@Override
	public User login(String email, String password) throws UserNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}
}
