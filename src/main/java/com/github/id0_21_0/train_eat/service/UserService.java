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

    public List<User> getAllUsers(){
        return respotory.findAll();
    }
}
