package com.prog.service;

import java.util.List;
import com.prog.entity.UserDtls;

public interface UserDtlsService {
	public List<UserDtls> getUserDtls();
	public UserDtls addUser(UserDtls u);
	public String getUserDtl(String email, String password);
}

