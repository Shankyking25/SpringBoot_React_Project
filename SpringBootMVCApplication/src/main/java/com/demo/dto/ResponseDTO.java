package com.demo.dto;


public class ResponseDTO {
	public ResponseDTO(String message) {
		super();
		this.message = message;
	}

	private String message;


	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
