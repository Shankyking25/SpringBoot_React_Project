package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.dao.AdminRepository;
import com.demo.dto.ErrorResponse;
import com.demo.model.Admin;                            /* In SpringBoot model Package = Admin.js is Present */   
import com.demo.service.IAdminService;                  /* In SpringBoot Service Package = IAdminService.js File is present */

@CrossOrigin // (origins="http://localhost:8181")      /* Combine 2 Applicaion like React with springboot*/
@RestController
@RequestMapping("/api/v1/admin")        /* When we develop rest api then we define it. v1 is for version. admin = it will define in mysql (admin column in skyudb Tables)*/
public class AdminController {

	@Autowired          /* Use to inject the repository    OR   inject the object dependency implicitly. It internally uses setter or constructor injection.*/  
	private IAdminService adminService;

	@Autowired
	private AdminRepository adminRepository;

	public AdminController() {
		System.out.println("In Constructor of " + getClass().getName());
	}

	// Rest get all customers   
	@GetMapping("/admins")
	public List<Admin> getAllAdmins() {
		System.out.println("/admin");
		return adminService.getAllAdmins();
	}

	@PostMapping("/saveAdmin")
	public ResponseEntity<?> addNewAdminrDetails(@RequestBody Admin TransientAdmin) {
		System.out.println("In addAdmin" + TransientAdmin);
		try {
			return new ResponseEntity<>(adminService.addAdmin(TransientAdmin), HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in add" + e);
			return new ResponseEntity<>(new ErrorResponse("adding new admin failed", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/UpdateAdmin")
	public ResponseEntity<?> updateEmployee(@RequestBody Admin TransientAdmin) {
		System.out.println("In UpdateAdmin" + TransientAdmin);
		try {
			String email = TransientAdmin.getAemail();
			String secretcode = TransientAdmin.getSecretcode();
			String password = TransientAdmin.getApassword();

			Admin l = adminRepository.checkEmail(email);

			if (l != null) {
				System.out.println("In if   block 1 ");
				if (l.getSecretcode().equals(secretcode)) {
					l.setApassword(password);
					System.out.println("In if block 2 ");
					Admin updatedAdmin = adminRepository.save(l);
					return ResponseEntity.ok(updatedAdmin);
				} else {
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}

			} else {
				System.out.println("In else block");
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			System.out.println("In catch block");
			return new ResponseEntity<>(new ErrorResponse("adding new admin failed", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}