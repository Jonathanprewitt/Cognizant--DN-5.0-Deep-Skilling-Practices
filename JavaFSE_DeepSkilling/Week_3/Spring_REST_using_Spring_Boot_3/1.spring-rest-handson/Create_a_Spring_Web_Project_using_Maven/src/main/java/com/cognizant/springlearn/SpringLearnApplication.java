package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

    // Initialize the logger for this class
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        // Log before starting the app
        LOGGER.info("Inside main - Starting Application...");

        SpringApplication.run(SpringLearnApplication.class, args);

        // Log after the app has started
        LOGGER.info("Inside main - Application Started successfully!");
    }
}