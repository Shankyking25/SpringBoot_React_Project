package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dao.CustomerRepository;
import com.demo.dto.ErrorResponse;
import com.demo.dto.ResponseDTO;
import com.demo.model.Customer;
import com.demo.service.ICustomerService;


@CrossOrigin//(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

	@Autowired
	private ICustomerService custService;
	
	@Autowired
	private CustomerRepository customerRepository;

	
	public CustomerController() {
		System.out.println("In Constructor of "+getClass().getName());
	}
	
	
	//get all customers
	@GetMapping("/customers")
	public List<Customer> getAllCustomers(){
		System.out.println("/customer");
		return custService.getAllCustomers();
	}
	
	
   //add REST API endpoints for adding new 
	@PostMapping("/saveCustomer")
	public ResponseEntity<?> addNewCustomerDetails(@RequestBody Customer TransientCustomer){
		System.out.println("In addCustomer"+TransientCustomer);
		try {
			return new ResponseEntity<>(custService.addCustomer(TransientCustomer),HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in add"+e);
			return new ResponseEntity<>(new ErrorResponse("adding new customer failed",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/{cid}")
	public ResponseEntity<ResponseDTO> inDeleteCustomerDetails(@PathVariable(name="cid") int id){
		System.out.println("In delete customer details"+id);
		String deleteCustomer = custService.deleteCustomer(id);
		return ResponseEntity.ok(new ResponseDTO(deleteCustomer));
	}
	
	@PostMapping("/UpdateCustomer")
	public ResponseEntity<?> updateEmployee(@RequestBody Customer TransientCustomer) {
		System.out.println("In UpdateAdmin" + TransientCustomer);
		try {
			String email = TransientCustomer.getCemail();
			String secretcode = TransientCustomer.getSecretcode();
			String password = TransientCustomer.getCpassword();

			Customer cdata = customerRepository.checkEmail(email);

			if (cdata != null) {
				System.out.println("In if   block 1 ");
				if (cdata.getSecretcode().equals(secretcode)) {
					cdata.setCpassword(password);
					System.out.println("In if block 2 ");
					Customer updatedCustomer = customerRepository.save(cdata);
					return ResponseEntity.ok(updatedCustomer);
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
