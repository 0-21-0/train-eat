package com.github.id0_21_0.train_eat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.id0_21_0.train_eat.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
