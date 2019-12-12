package com.dao.two;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserDao1 {

    int insert(@Param("name")String name);

    List<String> findAll();
}
