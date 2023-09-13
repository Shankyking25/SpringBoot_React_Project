package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.demo.model.Admin;
import com.demo.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	
	@Query(value= "select l from Customer l where l.cemail=:email ")
	public Customer checkEmail( @Param ("email")String email);

}
