package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="Admin")
//@DynamicInsert
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)   /* Auto generate value */
	private int aid;
	@Column
	private String aname;
	@Column(unique=true)
	private String aemail;
	@Column
	private String apassword;
	
	@Column
	private String admin="admin";
	
	
	@Column
	private String secretcode;
	
	public Admin() {
		super();
	}

	public Admin(int aid, String aname, String aemail, String apassword, String admin, String secretcode) {
		super();
		this.aid = aid;
		this.aname = aname;
		this.aemail = aemail;
		this.apassword = apassword;
		this.admin = admin;
		this.secretcode = secretcode;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public String getAemail() {
		return aemail;
	}

	public void setAemail(String aemail) {
		this.aemail = aemail;
	}

	public String getApassword() {
		return apassword;
	}

	public void setApassword(String apassword) {
		this.apassword = apassword;
	}

	public String getAdmin() {
		return admin;
	}

	public void setAdmin(String admin) {
		this.admin = admin;
	}

	public String getSecretcode() {
		return secretcode;
	}

	public void setSecretcode(String secretcode) {
		this.secretcode = secretcode;
	}

	@Override
	public String toString() {
		return "Admin [aid=" + aid + ", aname=" + aname + ", aemail=" + aemail + ", apassword=" + apassword + ", admin="
				+ admin + ", secretcode=" + secretcode + "]";
	}

	
	
	
}
