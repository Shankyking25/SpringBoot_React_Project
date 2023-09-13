package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Admin;
import com.demo.service.LoginService;



@CrossOrigin(origins = "http://localhost:3000")           /*  @CrossOrigin = Use to link React and SpringBoot the localhost:3000 is of react and localhost 8080 for springboot to represet react we use port 3000*/
@RestController
public class LoginControllerAdmin 
{
	@Autowired
	LoginService lservice;                           
	
	@GetMapping("/checkLogin")
	public String checkLogin(@RequestParam ("username")String username,@RequestParam ("password")String password)
	{
		return lservice.checkLogin(username,password);        
	}
}
