 package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.demo.model.Admin;


@Repository
@Transactional
public interface LoginRepositorycustomer extends JpaRepository<Admin, Integer> 
{

	
	@Query(value= "select l.customer from Customer l where l.cemail=:username and l.cpassword=:password")
	public String checkLogin( @Param ("username")String username,@Param ("password")String password);

}
