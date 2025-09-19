package com.github.id0_21_0.train_eat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.id0_21_0.train_eat.entity.User;
import com.github.id0_21_0.train_eat.service.UserService;

@RestController
public class TestController{

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers(){
        var res = userService.getAllUsers();
        return res;
    }
}