package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.LoginRepository;



@Service
public class LoginService 
{
	@Autowired
	LoginRepository lrepo;
	
	public String checkLogin(String username,String password) {
		return lrepo.checkLogin(username, password);
		
	}
	
	
}
