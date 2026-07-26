import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    // Base URL for our JSON Server
    private apiUrl = 'http://localhost:3000/courses';

    // Inject HttpClient here
    constructor(private http: HttpClient) { }

    // HTTP GET call to fetch all courses
    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('http://localhost:3000/courses');
    }

    // HTTP GET call to fetch a single course by ID
    getCourseById(id: string | number): Observable<Course> {
        return this.http.get<Course>(`${this.apiUrl}/${id}`);
    }

    // My recent change based on step 81 and 82 

    // POST: Add a new course to the database
    createCourse(course: any): Observable<Course> {
        return this.http.post<Course>(this.apiUrl, course);
    }

    // PUT: Update an existing course
    updateCourse(id: string | number, changes: any): Observable<Course> {
        return this.http.put<Course>(`${this.apiUrl}/${id}`, changes);
    }

    // DELETE: Remove a course from the database
    deleteCourse(id: string | number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}