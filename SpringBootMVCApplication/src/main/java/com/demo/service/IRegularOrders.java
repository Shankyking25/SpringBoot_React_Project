package com.demo.service;

import java.util.List;

import com.demo.model.RegularOrders;

public interface IRegularOrders {
	
	List<RegularOrders> getAllOrders();
	
	RegularOrders addRegularOrders(RegularOrders c);
	
	String deleteOrder(int id);

}
