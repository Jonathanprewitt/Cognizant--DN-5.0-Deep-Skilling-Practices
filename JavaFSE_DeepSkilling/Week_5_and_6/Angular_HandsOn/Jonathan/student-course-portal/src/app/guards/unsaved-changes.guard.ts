import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentForm } from '../features/enrollment/reactive-enrollment-form/reactive-enrollment-form.component';

export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentForm> = (component) => {
  // Check if the form exists and has been modified (dirty)
  if (component.enrollForm && component.enrollForm.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true; // Allow navigation if the form is untouched
};