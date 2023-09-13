package com.demo.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cust_id")
	private int cid;

	@Column(name = "Cust_name")
	private String cname;
	
	@Column(name = "Cust_add")
	private String caddress;
	
	@Column(name = "Cust_email", unique = true)
	private String cemail;
	
	@Column(name = "Cust_mob")
	private String cmobile;
	
	@Column(name = "Cust_pass")
	private String cpassword;
	
	@Column(name = "Cust_secretcode")
	private String secretcode;
	
	@Column
	private String customer="customer";

	public Customer() {
		super();
	}

	public Customer(int cid, String cname, String caddress, String cemail, String cmobile,
			String cpassword, String secretcode, String customer) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.caddress = caddress;
		this.cemail = cemail;
		this.cmobile = cmobile;
		this.cpassword = cpassword;
		this.secretcode = secretcode;
		this.customer = customer;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCaddress() {
		return caddress;
	}

	public void setCaddress(String caddress) {
		this.caddress = caddress;
	}

	public String getCemail() {
		return cemail;
	}

	public void setCemail(String cemail) {
		this.cemail = cemail;
	}

	public String getCmobile() {
		return cmobile;
	}

	public void setCmobile(String cmobile) {
		this.cmobile = cmobile;
	}

	public String getCpassword() {
		return cpassword;
	}

	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}

	public String getSecretcode() {
		return secretcode;
	}

	public void setSecretcode(String secretcode) {
		this.secretcode = secretcode;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Customer [cid=" + cid + ", cname=" + cname + ", caddress=" + caddress
				+ ", cemail=" + cemail + ", cmobile=" + cmobile + ", cpassword=" + cpassword + ", secretcode="
				+ secretcode + ", customer=" + customer + "]";
	}

	
	
	
}