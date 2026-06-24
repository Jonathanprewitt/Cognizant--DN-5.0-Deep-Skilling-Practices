package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    // Dependency
    private BookRepository bookRepository;

    // Setter method for Spring to inject the dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[Spring IoC] BookRepository dependency successfully injected into BookService.");
    }

    public void manageLibrary() {
        System.out.println("[Business Layer] BookService: Initiating library management tasks.");
        // Calling the repository method to prove it was successfully injected
        bookRepository.fetchBooks();
    }
}