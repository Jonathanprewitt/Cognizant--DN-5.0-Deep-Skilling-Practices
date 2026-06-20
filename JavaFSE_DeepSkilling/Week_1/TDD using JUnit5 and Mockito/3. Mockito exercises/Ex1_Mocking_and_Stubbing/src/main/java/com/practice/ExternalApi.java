package com.practice;

// This represents some external service (like a database or web server)
// that we DO NOT want to actually call during our fast unit tests.
public interface ExternalApi {
    String getData();
}