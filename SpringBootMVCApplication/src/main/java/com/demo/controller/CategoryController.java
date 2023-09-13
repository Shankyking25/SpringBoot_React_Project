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

import com.demo.dao.CategoryRepository;
import com.demo.dto.ErrorResponse;
import com.demo.dto.ResponseDTO;
import com.demo.exception.ResourceNotFoundException;
import com.demo.model.Admin;
import com.demo.model.Category;
import com.demo.service.ICategoryService;


@CrossOrigin//(origins="http://localhost:8181")
@RestController
@RequestMapping("/api/v1/category")      /*This is use for developing api and its version(v1)*/
public class CategoryController {

	@Autowired
	private ICategoryService catService;
	
	@Autowired
	private CategoryRepository CategoryRepository;
	
	public CategoryController() {
		System.out.println("In Constructor of "+getClass().getName());
	}
	
	//get all customers
	@GetMapping("/categories")      /*   /categories = it will present in react services folder we can give any name to this  */
	public List<Category> getAllCategory(){
		System.out.println("/categories");
		return catService.getAllCategory();
	}
	
	@PostMapping("/saveCategory")                  /**/
	public ResponseEntity<?> addNewCategoryDetails(@RequestBody Category TransientCategory){
		System.out.println("In addCategory"+TransientCategory);
		try {
			return new ResponseEntity<>(catService.addCategory(TransientCategory),HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in add"+e);
			return new ResponseEntity<>(new ErrorResponse("adding new category failed",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@DeleteMapping("/deleteCategory/{oid}")
	public ResponseEntity<ResponseDTO> inDeleteOrderDetails(@PathVariable(name="oid") int id){
		System.out.println("In delete order details"+id);
		String deleteCategory = catService.deleteCategory(id);
		return ResponseEntity.ok(new ResponseDTO(deleteCategory));
	}
	
	@GetMapping("/RegularOrdersById/{id}")
	public ResponseEntity<Category> getEmployeeById(@PathVariable Integer id) {
		System.out.println("in category controller");
		Category Category = CategoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(Category);
	}
	
}
