package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.RegularOrdersRepository;
import com.demo.dao.SpecialOrdersRepository;
import com.demo.model.RegularOrders;
import com.demo.model.SpecialOrders;

@Service
@Transactional
public class RegularOrderImpl implements IRegularOrders{

	@Autowired
	private RegularOrdersRepository orderRepo;
	
	
	@Override
	public RegularOrders addRegularOrders(RegularOrders c) {
		RegularOrders ro=orderRepo.save(c);
		System.out.println("here it is : "+ro.getJartype());
		return ro;
	}


	@Override
	public List<RegularOrders> getAllOrders() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}


	@Override
	public String deleteOrder(int id) {
		orderRepo.deleteById(id);
		return "Order details deleted for ID= "+id;
	}

}
