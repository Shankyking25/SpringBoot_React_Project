package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.demo.dao.CustomerRepository;
import com.demo.model.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService{

	@Autowired
	private CustomerRepository custRepo;
	
	@Override
	public List<Customer> getAllCustomers(){
				return custRepo.findAll();
	}

	@Override
	public Customer addCustomer(Customer c) {
		return custRepo.save(c);
		
	}

	@Override
	public String deleteCustomer(int id) {
		custRepo.deleteById(id);
		return "Customer details deleted for ID= "+id;
	}

	
}
