import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Imports the URL reader
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model'; // Adjust path if necessary

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html'
})
export class CourseDetail implements OnInit {
  course: Course | undefined;

  // Inject ActivatedRoute to read the URL, and CourseService to get data
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.courseService.getCourseById(idParam).subscribe({
        next: (courseData) => {
          this.course = courseData;
          this.cdr.detectChanges(); // <--- ADD THIS to force the UI to render the course details
        },
        error: (err) => {
          console.error('Error fetching course:', err);
          this.cdr.detectChanges(); // <--- ADD THIS here as well
        }
      });
    }
  }
}