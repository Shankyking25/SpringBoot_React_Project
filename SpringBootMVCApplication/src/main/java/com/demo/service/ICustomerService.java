package com.demo.service;

import java.util.List;

import com.demo.model.Customer;

public interface ICustomerService {
	
	List<Customer> getAllCustomers();

	Customer addCustomer(Customer c);

	String deleteCustomer(int id);

}
