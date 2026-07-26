import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentForm } from '../features/enrollment/reactive-enrollment-form/reactive-enrollment-form.component';

// Fixed the import path to use a dot instead of a dash
import { unsavedChangesGuard } from './unsaved-changes.guard';

describe('unsavedChangesGuard', () => {
  // Updated to CanDeactivateFn to match your actual guard
  const executeGuard: CanDeactivateFn<ReactiveEnrollmentForm> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => unsavedChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});