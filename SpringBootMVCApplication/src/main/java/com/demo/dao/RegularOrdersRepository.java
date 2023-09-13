package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.RegularOrders;
import com.demo.model.SpecialOrders;

@Repository
public interface RegularOrdersRepository extends JpaRepository<RegularOrders,Integer> {

}
