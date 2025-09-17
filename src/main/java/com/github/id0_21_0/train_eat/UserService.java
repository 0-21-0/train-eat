package com.github.id0_21_0.train_eat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository respotory;

    public List<User> getAllUsers(){
        return respotory.findAll();
    }
}
