package com.github.id0_21_0.train_eat;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController{
    @GetMapping("/hello")
    public String hello(){
        return "helloworld";
    }
}