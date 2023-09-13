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
import com.demo.model.Customer;
import com.demo.service.LoginService;
import com.demo.service.LoginServicecustomer;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginControllerCustomer 
{
	@Autowired
	LoginServicecustomer lservice;
	
//	@PostMapping("/checkLogincustomer")
//	public Object checkLogin(@RequestBody Customer l)
//	{
//		return lservice.checkLogin(l.getCemail(),l.getCpassword());
//	}
	
	@GetMapping("/checkLogincustomer")
	public String checkLogin(@RequestParam ("username")String username,@RequestParam ("password")String password)
	{
		return lservice.checkLogin(username,password);
	}
}
