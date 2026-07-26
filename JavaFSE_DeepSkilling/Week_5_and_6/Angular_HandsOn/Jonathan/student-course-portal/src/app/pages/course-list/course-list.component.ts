import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

// Import NgRx actions and selectors
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  // 1. Data streams from the Store replace static properties
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  errorMessage$: Observable<string | null>;

  selectedCourseId: number | null = null;

  // 2. Inject the central Store instead of CourseService and ChangeDetectorRef
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 3. Connect the streams to the specific NgRx Selectors
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.errorMessage$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    const searchQuery = this.route.snapshot.queryParamMap.get('search');
    if (searchQuery) {
      console.log('User searched for:', searchQuery);
    }

    // 4. Trigger the load cycle. 
    // The Store will hear this, but we still need an Effect to actually fetch the data!
    this.store.dispatch(loadCourses());
  }

  goToCourseDetails(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}