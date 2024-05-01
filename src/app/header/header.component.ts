import { Component, NgModule } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuActive: boolean = false;
  public products: any[] = [];

  constructor(private cartService: CartService) {}

  itemCount() {
    return this.cartService.getItems().length;
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
