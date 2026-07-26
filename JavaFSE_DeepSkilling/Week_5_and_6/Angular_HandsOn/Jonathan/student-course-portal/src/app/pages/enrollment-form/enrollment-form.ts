import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  // Step 46: Add submitted property
  submitted = false;

  enrollmentData = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: '',
    agreeToTerms: false
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true; // Toggle success message
      console.log('Is Form Valid?:', form.valid);
      console.log('Form Value Object:', form.value);
    }
  }
}