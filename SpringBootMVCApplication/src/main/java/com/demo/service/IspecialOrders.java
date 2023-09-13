package com.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.model.Customer;
import com.demo.model.SpecialOrders;

public interface IspecialOrders {

	
	SpecialOrders addSpecialOrders(SpecialOrders c);
	
	List<SpecialOrders> getAllorders();
	
	String deleteSpecialOrders(int id);
}
