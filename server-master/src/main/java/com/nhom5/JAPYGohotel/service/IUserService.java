package com.nhom5.JAPYGohotel.service;

import com.nhom5.JAPYGohotel.model.User;

import java.util.List;


public interface IUserService {
    User registerUser(User user);
    List<User> getUsers();
    void deleteUser(String email);
    User getUser(String email);
}
