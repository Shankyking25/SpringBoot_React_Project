package com.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SpecialOrders")
public class SpecialOrders {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cust_id")
	private int cid;
	
	@Column(name = "Cust_name")
	private String cname;
	
	@Column(name = "Cust_add")
	private String caddress;
	
	@Column(name = "Cust_email")
	private String cemail;
	
	@Column(name = "Cust_mob")
	private String cmobile;
	
	@Column(name = "odr_qty")
	private int oqty;
	
	@Column(name = "odr_type")
	private String otype;
	
	@Column(name = "odr_date")
	private Date odate;
	
	
	@Column(name = "odr_cpty")
	private int ocpty;


	public SpecialOrders(int cid, String cname, String caddress, String cemail, String cmobile, int oqty, String otype,
			Date odate, int ocpty) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.caddress = caddress;
		this.cemail = cemail;
		this.cmobile = cmobile;
		this.oqty = oqty;
		this.otype = otype;
		this.odate = odate;
		this.ocpty = ocpty;
	}


	public SpecialOrders() {
		super();
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


	public int getOqty() {
		return oqty;
	}


	public void setOqty(int oqty) {
		this.oqty = oqty;
	}


	public String getOtype() {
		return otype;
	}


	public void setOtype(String otype) {
		this.otype = otype;
	}


	public Date getOdate() {
		return odate;
	}


	public void setOdate(Date odate) {
		this.odate = odate;
	}


	public int getOcpty() {
		return ocpty;
	}


	public void setOcpty(int ocpty) {
		this.ocpty = ocpty;
	}


	@Override
	public String toString() {
		return "SpecialOrders [cid=" + cid + ", cname=" + cname + ", caddress=" + caddress + ", cemail=" + cemail
				+ ", cmobile=" + cmobile + ", oqty=" + oqty + ", otype=" + otype + ", odate=" + odate + ", ocpty="
				+ ocpty + "]";
	}


	

	
	

	
	

	

}
