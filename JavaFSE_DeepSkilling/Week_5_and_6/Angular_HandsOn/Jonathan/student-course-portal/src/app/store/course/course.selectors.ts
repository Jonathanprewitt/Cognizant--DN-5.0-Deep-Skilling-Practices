import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// 1. Select the specific feature state (the 'course' slice of the global store)
export const selectCourseState = createFeatureSelector<CourseState>('course');

// 2. Select just the array of courses
export const selectAllCourses = createSelector(
    selectCourseState,
    (state: CourseState) => state.courses
);

// 3. Select just the loading boolean
export const selectCoursesLoading = createSelector(
    selectCourseState,
    (state: CourseState) => state.loading
);

// 4. Select just the error message
export const selectCoursesError = createSelector(
    selectCourseState,
    (state: CourseState) => state.error
);