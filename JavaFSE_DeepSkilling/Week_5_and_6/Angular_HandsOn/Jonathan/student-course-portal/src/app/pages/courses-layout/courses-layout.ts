import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. Add this import

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  // 2. Add RouterModule to this array
  imports: [CommonModule, RouterModule],
  templateUrl: './courses-layout.component.html',
  styleUrl: './courses-layout.css'
})
export class CoursesLayout {
  // Your class logic (if any) goes here
}