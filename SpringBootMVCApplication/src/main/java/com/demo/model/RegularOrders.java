package com.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity             /*  It make the class as JPA entity*/
@Table(name = "RegularOrders")      /*  It will define Table name is RegularOrders*/
public class RegularOrders {
	
	@Id          /*  Make it Primary Key*/
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Ord_id")       /*  It will define/Store new column data of new Table.The name of Table is RegularOrders(line=13)  */
	private int oid;
	
	
	/*If we not Provide these notaion then JPA internaly provide it automatically */
	@Column(name = "Cust_name")  /* we can give any name Cust_name or some thing else*/ /*  It will define/Store new column data of new Table.The name of Table is RegularOrders(line=13)  */
	private String cname;

	@Column(name = "Cust_Address")      
	private String caddress;
	
	@Column(name = "Cust_email")    
	private String cemail; 
	
	@Column(name = "Cust_Mobile")      
	private String  cmobile;
	
	@Column(name = "jar_type")        
	private String  jartype;
	
	@Column(name = "jar_capacity")        
	private String  capacity;
	
	@Column(name = "jar_price")           
	private String  price;
	
	@Column(name = "order_date")
	private Date  odate;

	public RegularOrders(int oid, String cname, String caddress, String cemail, String cmobile, String jartype,
			String capacity, String price, Date odate) {
		super();
		this.oid = oid;
		this.cname = cname;
		this.caddress = caddress;
		this.cemail = cemail;
		this.cmobile = cmobile;
		this.jartype = jartype;
		this.capacity = capacity;
		this.price = price;
		this.odate = odate;
	}

	public RegularOrders() {
		super();
	}

	
	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
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

	public String getJartype() {
		return jartype;
	}

	public void setJartype(String jartype) {
		this.jartype = jartype;
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

	public Date getOdate() {
		return odate;
	}

	public void setOdate(Date odate) {
		this.odate = odate;
	}

	@Override
	public String toString() {
		return "RegularOrders [oid=" + oid + ", cname=" + cname + ", caddress=" + caddress + ", cemail=" + cemail
				+ ", cmobile=" + cmobile + ", jartype=" + jartype + ", capacity=" + capacity + ", price=" + price
				+ ", odate=" + odate + "]";
	}
}
