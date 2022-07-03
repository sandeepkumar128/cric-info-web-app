package com.ibm.UserRemindersException;

public class MatchidAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public MatchidAlreadyExistsException() {
		super();
	}

	public MatchidAlreadyExistsException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
		super(arg0, arg1, arg2, arg3);
	}

	public MatchidAlreadyExistsException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public MatchidAlreadyExistsException(String arg0) {
		super(arg0);
	}

	public MatchidAlreadyExistsException(Throwable arg0) {
		super(arg0);
	}
	
}
