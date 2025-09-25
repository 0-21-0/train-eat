package com.github.id0_21_0.train_eat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.id0_21_0.train_eat.entity.User;
import com.github.id0_21_0.train_eat.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository respotory;

    public List<User> getAllUsers() {
        return respotory.findAll();
    }

    public User saveUser(User user) {
        return respotory.save(user);
    }

    public User updateUser(User user) {
        if (!respotory.existsById(user.getId())) {
            throw new IllegalArgumentException("用户id:" + user.getId() + "不存在！");
        }
        return respotory.save(user);
    }

    public void deleteUser(Long id){
        if(!respotory.existsById(id)){
            throw new IllegalArgumentException("用户id:"+id+"不存在！");
        }
        respotory.deleteById(id);
    }
}
