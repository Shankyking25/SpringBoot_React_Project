package com.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)           /*  Rest api will throw not found Exception if data is not found in data bast*/
public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	
	public ResourceNotFoundException(String message) {
		super(message);
	}
	
}
