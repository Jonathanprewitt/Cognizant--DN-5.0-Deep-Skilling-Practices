import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Hardcoded to true for this exercise per Step 75 instructions
    isLoggedIn: boolean = true;

    constructor() { }
}   