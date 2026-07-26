import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  // Replaced hardcoded value with dynamic service data
  coursesAvailable = 0;

  // Inject the service
  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  nSearchSubmit(): void {
    if (this.searchTerm) {
      this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
    }
  }

  ngOnInit() {
    // Hands-On 6: Fetch real count from service
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.coursesAvailable = courses.length;
      },
      error: (err) => console.error(err)
    });
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}