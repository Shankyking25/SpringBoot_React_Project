package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.SpecialOrdersRepository;
import com.demo.model.Customer;
import com.demo.model.SpecialOrders;
@Service
@Transactional
public class SpecialOrderImpl implements IspecialOrders {
	
	@Autowired
	private SpecialOrdersRepository orderRepo;
	
	@Override
	public SpecialOrders addSpecialOrders(SpecialOrders c) {
		// TODO Auto-generated method stub
		return orderRepo.save(c);
	}

	@Override
	public List<SpecialOrders> getAllorders() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}

	@Override
	public String deleteSpecialOrders(int id) {
		orderRepo.deleteById(id);
		return "Order details deleted for ID= "+id;
	}

}
