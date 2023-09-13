package com.demo.service;

import java.util.List;

import com.demo.model.Category;

public interface ICategoryService {

	List<Category> getAllCategory();

	Category addCategory(Category category);
	
	
	String deleteCategory(int id);
}
