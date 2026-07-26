import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetail } from './course-detail.component';
import { provideRouter } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { of } from 'rxjs';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  beforeEach(async () => {
    // Create a dummy CourseService so the component can safely inject it
    const mockCourseService = {
      getCourseById: () => of(null)
    };

    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
        provideRouter([]),
        { provide: CourseService, useValue: mockCourseService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});