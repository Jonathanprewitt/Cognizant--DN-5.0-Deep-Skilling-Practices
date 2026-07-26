import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import * as CourseActions from './course.actions';

// 1. Define the shape of our state
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

// 2. Define the initial starting state before any actions happen
export const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

// 3. Create the reducer to handle state mutations safely (immutable updates)
export const courseReducer = createReducer(
  initialState,
  
  // When load is triggered: set loading to true, clear any old errors
  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  // When load succeeds: populate the courses array, set loading to false
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses,
    loading: false
  })),
  
  // When load fails: capture the error message, set loading to false
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  }))
);