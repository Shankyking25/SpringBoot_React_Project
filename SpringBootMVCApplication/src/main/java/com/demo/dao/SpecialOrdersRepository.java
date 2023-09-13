package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.SpecialOrders;
@Repository
public interface SpecialOrdersRepository extends JpaRepository<SpecialOrders,Integer> {

}
