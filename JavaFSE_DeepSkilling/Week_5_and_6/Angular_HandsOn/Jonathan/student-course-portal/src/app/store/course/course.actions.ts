import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model'; // Ensure this path matches your structure

// 1. Action to trigger the API call
export const loadCourses = createAction('[Course] Load Courses');

// 2. Action for when the API successfully returns data
export const loadCoursesSuccess = createAction(
    '[Course] Load Courses Success',
    props<{ courses: Course[] }>()
);

// 3. Action for when the API call fails
export const loadCoursesFailure = createAction(
    '[Course] Load Courses Failure',
    props<{ error: string }>()
);