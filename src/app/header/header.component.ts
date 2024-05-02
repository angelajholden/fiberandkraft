import { Component, NgModule } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuActive: boolean = false;
  public products: any[] = [];

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  isLoggedIn$: Observable<boolean>;

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  itemCount() {
    return this.cartService.getItems().length;
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
