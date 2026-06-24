package com.library.controller;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;

    // Constructor Injection
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // GET endpoint to fetch all books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // POST endpoint to add a new book
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
    
    // DELETE endpoint to remove a book by ID
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }
}
