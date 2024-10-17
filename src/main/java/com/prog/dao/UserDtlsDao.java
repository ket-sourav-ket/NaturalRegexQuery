package com.prog.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prog.entity.UserDtls;

public interface UserDtlsDao extends JpaRepository<UserDtls,Integer> {

}
