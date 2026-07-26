import { EnrollmentService } from '../../../services/enrollment.service'; // Hands on 8
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { CourseService } from '../../../services/course.service'; // Last imported file Step 81 

// Step 53: Custom Synchronous Validator
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Step 55: Custom Asynchronous Validator
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService, // Wire POST to the Enrollment Form
  ) { }

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Applied the Async validator as the third argument
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Applied the Custom Sync validator here
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      // Step 56: Add FormArray for additional courses
      additionalCourses: this.fb.array([])
    });
  }

  // Step 57: Typed getter for the FormArray
  // This is better than casting in the template because it keeps type safety in TypeScript and keeps the HTML clean.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Method to push a new control into the array
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Method to remove a control from the array
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Step 81 (Hands on 8)
  onSubmit(): void {
    if (this.enrollForm.valid) {
      this.enrollmentService.createEnrollment(this.enrollForm.value).subscribe({
        next: (response: any) => {
          console.log('Successfully saved to database:', response);
          alert('Enrollment successfully submitted!');
          this.enrollForm.reset();
        },
        error: (err: any) => {
          console.error('Error saving enrollment:', err);
          alert('Failed to save. Check the console.');
        }
      });
    } else {
      this.enrollForm.markAllAsTouched();
    }
  }
}