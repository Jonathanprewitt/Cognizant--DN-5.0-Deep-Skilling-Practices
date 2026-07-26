import { Injectable, inject } from '@angular/core'; // <-- 1. Import 'inject' here
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CourseService } from '../../services/course.service';
import * as CourseActions from './course.actions';

@Injectable()
export class CourseEffects {

  // 2. Use inject() to assign dependencies directly as class properties. 
  // Make sure these are written ABOVE the createEffect block!
  private actions$ = inject(Actions);
  private courseService = inject(CourseService);

  // 3. Now, createEffect can safely access this.actions$
  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map(courses => CourseActions.loadCoursesSuccess({ courses })),
          catchError(error => of(CourseActions.loadCoursesFailure({ error: error.message })))
        )
      )
    );
  });

  // 4. The constructor is completely removed.
}