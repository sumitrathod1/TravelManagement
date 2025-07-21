import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private _employeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  foruserLogin() {}

  onSubmit() {
    if (this.loginForm.valid) {
      localStorage.setItem('name', this.loginForm.value.username);
      this._employeService.loginUser(this.loginForm.value).subscribe({
        next: (response) => {
          this.loginForm.reset();
          this._employeService.storeTokan(response.token);
          // Decode the token
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(response.token);
          const role =
            decodedToken[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];

          // Navigate based on role
          if (role === 'Admin') {
            this.router.navigate(['/home']);
          } else if (role === 'Employee') {
            this.router.navigate(['/drver']);
          } else {
            console.warn('Unknown role:', role);
          }
          console.log('Login successful:', response);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    }
  }
}
