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

import com.demo.dao.SpecialOrdersRepository;
import com.demo.dto.ErrorResponse;
import com.demo.dto.ResponseDTO;
import com.demo.exception.ResourceNotFoundException;
import com.demo.model.Customer;
import com.demo.model.SpecialOrders;
import com.demo.service.IspecialOrders;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/orders")
public class SpecialOrderController {

	@Autowired
	private IspecialOrders orderServices;
	
	@Autowired
	private SpecialOrdersRepository specialOrdersRepository;
	
	public SpecialOrderController() {
		System.out.println("In Constructor of "+getClass().getName());
	}


	@GetMapping("/getAllorders")
	public List<SpecialOrders> getAllorders(){
		System.out.println("/getAllorders");
		return orderServices.getAllorders();
	}

	@PostMapping("/saveOrders")
	public ResponseEntity<?> addNewCustomerDetails(@RequestBody SpecialOrders TransientSpecialOrders){
		System.out.println("In addCustomer"+TransientSpecialOrders);
		try {
			return new ResponseEntity<>(orderServices.addSpecialOrders(TransientSpecialOrders),HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in add"+e);
			return new ResponseEntity<>(new ErrorResponse("adding new customer failed",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@DeleteMapping("/deleteSpecialOrders/{oid}")
	public ResponseEntity<ResponseDTO> inDeleteOrderDetails(@PathVariable(name="oid") int id){
		System.out.println("In delete order details"+id);
		
		String deleteSpecialOrders = orderServices.deleteSpecialOrders(id);
		
		//return new ResponseEntity<>(new ResponseDTO(deleteCustomer), HttpStatus.OK);
		return ResponseEntity.ok(new ResponseDTO(deleteSpecialOrders));
	}
	
	@GetMapping("/ViewSpecialOrdersById/{id}")
	public ResponseEntity<SpecialOrders> getSpecialOrdersById(@PathVariable Integer id) {
		
		SpecialOrders SpecialOrders = specialOrdersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("SpecialOrders not exist with id :" + id));
		return ResponseEntity.ok(SpecialOrders);
	}
}
