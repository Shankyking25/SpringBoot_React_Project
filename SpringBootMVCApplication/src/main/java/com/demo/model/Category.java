package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "category")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cat_id")
	private int cgid;
	@Column(name = "Cat_desc")
	private String description;
	@Column(name = "Cat_capacity")
	private String capacity;
	@Column(name = "Cat_price")
	private String price;
	
	public Category() {
		super();
	}

	public Category(int cgid, String description, String capacity, String price) {
		super();
		this.cgid = cgid;
		this.description = description;
		this.capacity = capacity;
		this.price = price;
	}

	
	public int getCgid() {
		return cgid;
	}

	public void setCgid(int cgid) {
		this.cgid = cgid;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Category [cgid=" + cgid + ", description=" + description + ", capacity="
				+ capacity + ", price=" + price + "]";
	}
}
