import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.register(form.value).subscribe({
      next: (response) => {
        console.log('User registered', response);
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      },
    });
  }
}
