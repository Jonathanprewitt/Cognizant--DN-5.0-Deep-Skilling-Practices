package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println(">>> Booting Spring Application Context...");

        // Load the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the fully wired BookService bean
        BookService service = (BookService) context.getBean("bookService");

        System.out.println("\n>>> Testing Application Flow:");
        service.manageLibrary();

        System.out.println("\n>>> Execution Complete.");
    }
}