package com.github.id0_21_0.train_eat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.id0_21_0.train_eat.entity.User;
import com.github.id0_21_0.train_eat.service.UserService;

@RestController
public class UserController{

    @Autowired
    private UserService userService;

    @GetMapping("/selectUser")
    public List<User> getUsers(){
        var res = userService.getAllUsers();
        return res;
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }

    @DeleteMapping("/deleteUser")
    public void deleteUser(@RequestBody Long id){
        userService.deleteUser(id);
    }
}