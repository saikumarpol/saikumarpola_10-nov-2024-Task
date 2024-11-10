import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-form.styles.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LogicComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService)
  
  
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();
      this.authService.login(rawForm.email, rawForm.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'An error occurred during login';
        }
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly';
    }
  };
  
 
}
