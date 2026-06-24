package com.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibraryManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementApplication.class, args);
        System.out.println(">>> Spring Boot Application Started Successfully!");
        System.out.println(">>> Access the H2 Database console at: http://localhost:8080/h2-console");
    }
}
