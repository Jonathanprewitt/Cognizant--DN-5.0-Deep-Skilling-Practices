import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnInit, OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;
  isEnrolled: boolean = false;

  // Observable exposed for the template as requested by Hands-On 9 (Step 100)
  enrolledIds$: Observable<number[]>;

  // Inject the NgRx Store instead of the old EnrollmentService
  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnInit() {
    // Subscribe to keep the local synchronous 'isEnrolled' flag updated 
    // so that your 'cardClasses' getter continues to work perfectly!
    this.enrolledIds$.subscribe(ids => {
      if (this.course) {
        this.isEnrolled = ids.includes(this.course.id);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course'] && !changes['course'].firstChange) {
      console.log('Course data updated:', changes['course'].currentValue);
    }
  }
  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  // Handle the enroll click using NgRx dispatch actions
  onEnrollClick() {
    this.enrollRequested.emit(this.course.id); // Preserved from HO 2

    if (this.isEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get statusBorderColor() {
    switch (this.course.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      case 'pending': return 'grey';
      default: return 'transparent';
    }
  }
}