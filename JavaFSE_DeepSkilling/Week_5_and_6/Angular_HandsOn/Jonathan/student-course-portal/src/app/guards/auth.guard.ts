import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Inject the required services
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check the login status
  if (authService.isLoggedIn) {
    return true; // Allow access to the route
  } else {
    router.navigate(['/']); // Redirect to home
    return false; // Block access
  }
};