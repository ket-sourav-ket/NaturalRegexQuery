package com.prog.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.prog.entity.UserDtls;
import com.prog.service.UserDtlsService;


@RestController
public class UserController {
	@Autowired
	private UserDtlsService service;
	
	@GetMapping("/")
	public String home() {
		return "home";
	  }  
	
	@PostMapping("/register") 		// for creating new account
	public UserDtls register(@RequestBody UserDtls u) {	
		return this.service.addUser(u); 
	}
	
	
	// get user details
	@GetMapping("/UserDtls")
	public List<UserDtls> getUserDtls(){
		return this.service.getUserDtls();
	}
	
	@GetMapping("/UserDtls/{email}/{password}")			// for logging into an existing account
	public String getUserDtl(@PathVariable String email,@PathVariable String password){
		return this.service.getUserDtl(email,password);
	}
	
}