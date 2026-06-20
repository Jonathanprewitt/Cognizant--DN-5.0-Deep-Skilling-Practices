package com.practice;

// This is the actual class we are testing. 
// It relies on the ExternalApi to get its data.
public class MyService {
    
    private ExternalApi api;

    // Constructor Injection
    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}