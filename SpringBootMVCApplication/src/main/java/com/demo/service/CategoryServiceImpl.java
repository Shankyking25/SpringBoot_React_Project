package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.CategoryRepository;
import com.demo.model.Category;

@Service
@Transactional
public class CategoryServiceImpl implements ICategoryService{

	@Autowired
	private CategoryRepository catRepo;
	
	@Override
	public List<Category> getAllCategory() {
		return catRepo.findAll();
	}

	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return catRepo.save(category);
	}

	@Override
	public String deleteCategory(int id) {
		catRepo.deleteById(id);
		return  "Order details deleted for ID= "+id;
	}

}
