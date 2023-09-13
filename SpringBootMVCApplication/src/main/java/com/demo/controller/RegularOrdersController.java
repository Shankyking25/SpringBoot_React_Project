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

import com.demo.dto.ErrorResponse;
import com.demo.dto.ResponseDTO;
import com.demo.model.RegularOrders;
import com.demo.service.IRegularOrders;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/RegularOrder")
public class RegularOrdersController {

	@Autowired
	private IRegularOrders orderServices;
	
	@GetMapping("/getRegularorders")
	public List<RegularOrders> getAllOrders(){
		System.out.println("/order");
		return orderServices.getAllOrders();
	}
	
	
	@PostMapping("/saveOrder")
	public ResponseEntity<?> addNewCustomerDetails(@RequestBody RegularOrders TransientRegularOrders){
		System.out.println("In addCustomer"+TransientRegularOrders);
		try {
			return new ResponseEntity<>(orderServices.addRegularOrders(TransientRegularOrders),HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in add"+e);
			return new ResponseEntity<>(new ErrorResponse("adding new customer failed",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/deleteRegularorders/{oid}")
	public ResponseEntity<ResponseDTO> inDeleteOrderDetails(@PathVariable(name="oid") int id){
		System.out.println("In delete order details"+id);
		
		String deleteOrder = orderServices.deleteOrder(id);
		
		//return new ResponseEntity<>(new ResponseDTO(deleteCustomer), HttpStatus.OK);
		return ResponseEntity.ok(new ResponseDTO(deleteOrder));
	}
}
