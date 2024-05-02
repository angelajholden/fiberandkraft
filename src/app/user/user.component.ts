import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe({
      next: (userData) => {
        this.user = userData;
      },
      error: (error) => {
        console.error('Failed to get user details', error);
      },
    });
  }
}
