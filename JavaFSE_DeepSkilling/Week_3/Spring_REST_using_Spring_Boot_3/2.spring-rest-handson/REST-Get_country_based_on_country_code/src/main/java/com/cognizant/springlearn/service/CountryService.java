package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    private final List<Country> countries = new ArrayList<>();

    public CountryService() {
        // Initialize container context and fetch all country bean allocations
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        countries.add(context.getBean("us", Country.class));
        countries.add(context.getBean("de", Country.class));
        countries.add(context.getBean("in", Country.class));
        countries.add(context.getBean("jp", Country.class));
    }

    public Country getCountry(String code) throws CountryNotFoundException {
        // Iterating through to find matching case-insensitive ISO code
        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }
        // Throw handled exception error if not found in configuration list
        throw new CountryNotFoundException();
    }
}