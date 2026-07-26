import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs'; // Added upon hands on 8
import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    private enrolledCourseIds: number[] = [];

    constructor(private courseService: CourseService, private http: HttpClient) { }

    enroll(courseId: number): void {
        if (!this.enrolledCourseIds.includes(courseId)) {
            this.enrolledCourseIds.push(courseId);
        }
    }

    // Step 81 / Hands-On 8: Save enrollment form data to json-server
    createEnrollment(enrollmentData: any): Observable<any> {
        return this.http.post<any>('http://localhost:3000/enrollments', enrollmentData);
    }

    unenroll(courseId: number): void {
        this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
    }

    isEnrolled(courseId: number): boolean {
        return this.enrolledCourseIds.includes(courseId);
    }
    // Step 82 (Hands on 8)
    getEnrolledCourses(): Observable<Course[]> {
        // If there are no enrolled courses, return an empty array wrapped in an Observable
        if (this.enrolledCourseIds.length === 0) {
            return of([]);
        }

        // Create an array of pending HTTP GET requests
        const courseRequests = this.enrolledCourseIds.map(id => this.courseService.getCourseById(id));

        // forkJoin executes all the requests and groups the results into a single array
        return forkJoin(courseRequests);
    }
}