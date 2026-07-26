import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Introduction to Angular', code: 'CS-101', credits: 3, gradeStatus: 'passed' },
    { id: 2, name: 'Embedded Systems & IoT', code: 'ECE-402', credits: 4, gradeStatus: 'pending' }
  ];

  // Step 106: Configure TestBed with HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifies that there are no outstanding HTTP requests after each test
    httpMock.verify();
  });

  // Step 107: Test getCourses() success
  it('should retrieve courses from the API via GET', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');

    // Flush the mock data to simulate a successful server response
    req.flush(mockCourses);
  });

  // Step 108: Test error handling
  it('should handle a 500 server error', () => {
    const errorMessage = 'Internal Server Error';

    service.getCourses().subscribe({
      next: () => fail('The request should have failed'),
      error: (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe(errorMessage);
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    // Flush a 500 error response to simulate a server crash
    req.flush('Error loading data', { status: 500, statusText: errorMessage });
  });
});