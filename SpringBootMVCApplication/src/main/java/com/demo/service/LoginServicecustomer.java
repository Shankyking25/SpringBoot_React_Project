package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.LoginRepository;
import com.demo.dao.LoginRepositorycustomer;



@Service
public class LoginServicecustomer 
{
	@Autowired
	LoginRepositorycustomer lrepo;
	
	
	

	public String checkLogin(String username,String password) {
		return lrepo.checkLogin(username, password);
		
	}
	

}
