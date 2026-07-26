import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveEnrollmentForm } from './reactive-enrollment-form/reactive-enrollment-form.component'; // Adjust path if needed
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard'; // <-- Add import

const routes: Routes = [
  {
    path: '',
    component: ReactiveEnrollmentForm,
    canDeactivate: [unsavedChangesGuard] // <--guard here
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule { }