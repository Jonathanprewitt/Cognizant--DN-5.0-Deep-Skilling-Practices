import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // lastly imnported hands on 8

// Import NgRx providers (hands on 9)
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects'; // <-- 1. Imported provideEffects

import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects'; // <-- 2. Imported  Effects
// Hands on 9 (Step 99)
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(), // Lastly added
    // 1. Initialize the global store (empty for now)
    provideStore({}),
    provideState({ name: 'course', reducer: courseReducer }),
    provideState({ name: 'enrollment', reducer: enrollmentReducer }),

    provideEffects([CourseEffects]),
    // 2. Instrument the store for the Redux DevTools extension
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
};