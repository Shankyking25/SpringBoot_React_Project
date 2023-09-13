package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer>{
	

	
	@Query(value= "select l from Admin l where l.aemail=:email ")
	public Admin checkEmail( @Param ("email")String email);
}
