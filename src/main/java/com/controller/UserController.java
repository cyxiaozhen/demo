package com.controller;

import com.dao.one.UserDao;
import com.dao.two.UserDao1;
import com.pojo.User;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDao1 userDao1;
    @Autowired
    private UserDao userDao;
    @RequestMapping("user1")
    public Object user1(){
        List<User> list = userDao.selelAllUser();
        for (User u:list) {
            String name=u.getName();
            int i=userDao1.insert(name);
            System.out.println(i);
        }
        return list;
    }

    @RequestMapping("user2")
    public Object user2(){

        String name="王八蛋";
        int i=userService.insert(name);
        System.out.println(i);
        return i;
    }

    @RequestMapping("user3")
    public Object user3(){
        List<String> list=userService.findAll();
        System.out.println(list);
        return list;
    }
}
