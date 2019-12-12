package com.service;

import com.dao.UserMapper;
import com.dao.two.UserDao1;
import com.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserMapper {

    @Autowired
    UserMapper userMapper;

    @Autowired
    UserDao1 userDao1;

//    @Override
//    public MyResult login(User user){
//        User u = new User();
//        List<MyResult> list = (List<MyResult>) userMapper.login(user);
//        MyResult result = new MyResult();
//        if (list.size()!=0){
//            result.setCode(1);
//            result.setMsg("登陆成功");
//            result.setList(list);
//            result.setObj(list.get(0));
//        }else {
//            result.setCode(0);
//            result.setMsg("登陆失败");
//        }
//        return result;
//    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(User record) {
        return 0;
    }

    @Override
    public int insertSelective(User record) {
        return 0;
    }

    @Override
    public User selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(User record) {
        return 0;
    }

    public List<String> findAll(){
      return userDao1.findAll();
    }

    public int insert(String name){
        return userDao1.insert(name);
    }
}
