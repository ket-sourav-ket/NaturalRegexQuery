package com.prog.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prog.entity.UserDtls;
import com.prog.repository.userRepository;

import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {
	@Autowired
	private userRepository repo;
	
	
	@GetMapping("/")
	public 	String home() {
		return "index";
	}
	
	@PostMapping("/register")
	public String register(@ModelAttribute UserDtls u, HttpSession session) {
		
		System.out.println(u);
		
		
		repo.save(u);
		session.setAttribute("message","Account Created Succesfully.");
		
		return "redirect:/";
	}
}
