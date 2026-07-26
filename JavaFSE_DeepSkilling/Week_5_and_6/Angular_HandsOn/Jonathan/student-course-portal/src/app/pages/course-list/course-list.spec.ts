import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../models/course.model';
import { provideRouter } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Mock NgRx Course', code: 'MOCK-101', credits: 4, gradeStatus: 'passed' }
  ];

  // Step 109: Configure TestBed with provideMockStore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({
          initialState: {
            course: { courses: mockCourses, loading: false, error: null },
            enrollment: { enrolledCourseIds: [] } // <-- ADD THIS LINE
          }
        }),
        provideRouter([])
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  it('should create and render initial state', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // Step 110: Simulate a loading state using store.setState()
  it('should show loading indicator when state is loading', () => {
    // Override the initial state to simulate an active API call
    store.setState({
      course: { courses: [], loading: true, error: null }
    });

    // Tell Angular to update the HTML based on the new state
    fixture.detectChanges();

    // Look for your loading indicator in the DOM (assuming you use a <p> or <div> with 'Loading')
    // Note: If your HTML uses a specific class like <div class="spinner">, change the 'p' below to '.spinner'
    const loadingElement = fixture.debugElement.query(By.css('p'));

    expect(loadingElement).toBeTruthy();
    expect(loadingElement.nativeElement.textContent).toContain('Loading');
  });
});