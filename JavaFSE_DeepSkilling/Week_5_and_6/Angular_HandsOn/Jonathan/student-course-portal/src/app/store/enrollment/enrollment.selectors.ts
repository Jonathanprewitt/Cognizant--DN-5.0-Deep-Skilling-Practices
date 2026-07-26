import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(
    selectEnrollmentState,
    (state) => state.enrolledCourseIds
);

// Cross-slice selector: Combines all courses with the enrolled IDs to return full course objects
export const selectEnrolledCourses = createSelector(
    selectAllCourses,
    selectEnrolledIds,
    (courses, enrolledIds) => courses.filter(course => enrolledIds.includes(course.id))
);