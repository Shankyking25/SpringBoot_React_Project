package com.demo.service;

import java.util.List;

import com.demo.model.Admin;

public interface IAdminService {

	List<Admin> getAllAdmins();

	Admin addAdmin(Admin a);

	Admin getAdminById(int id);

	Object findAdminById(int id);



	Admin updatePass(Admin admin);

	
}
