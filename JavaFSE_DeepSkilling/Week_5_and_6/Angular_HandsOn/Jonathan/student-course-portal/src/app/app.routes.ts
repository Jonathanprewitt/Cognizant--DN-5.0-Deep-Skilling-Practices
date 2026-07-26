import { authGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found'; // Use actual class name
import { CoursesLayout } from './pages/courses-layout/courses-layout'; // Use actual class name
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetail } from './pages/course-detail/course-detail.component';

export const routes: Routes = [
    // Base route
    { path: '', component: HomeComponent },

    // Nested Routes for Courses
    {
        path: 'courses',
        component: CoursesLayout, // Updated to match import
        children: [
            { path: '', component: CourseListComponent },
            { path: ':id', component: CourseDetail } // Updated to match import
        ]
    },

    // Profile route
    {
        path: 'profile',
        canActivate: [authGuard], // <-- Added guard here
        component: StudentProfileComponent
    },

    // Lazy Loaded Enrollment Route
    // Lazy Loaded Enrollment Route
    {
        path: 'enroll',
        canActivate: [authGuard], // <-- Added guard here
        loadChildren: () => import('./features/enrollment/enrollment.module').then(m => m.EnrollmentModule)
    },
    // Wildcard route for 404 (MUST be at the very bottom)
    { path: '**', component: NotFound } // Updated to match import
];
