package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.AdminRepository;
import com.demo.model.Admin;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService{

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public List<Admin> getAllAdmins() {
		return adminRepo.findAll();
	}

	@Override
	public Admin addAdmin(Admin a) {
		// TODO Auto-generated method stub
		return adminRepo.save(a);
	}

	@Override
	public Admin getAdminById(int id) {
		// TODO Auto-generated method stub
		return adminRepo.getById(id);
	}

	@Override
	public Object findAdminById(int id) {
		
		return adminRepo.findById(id);
	}

	public Admin updatePass(Admin admin) {
		
		return adminRepo.save(admin);
	}



}
