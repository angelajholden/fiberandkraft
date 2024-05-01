import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  // @Input() isActive: boolean;

  // @Output() changeActiveEvent = new EventEmitter<boolean>();

  public counter: number = 1;

  constructor(private cartService: CartService) {}

  public items = this.cartService.getItems();
  public quantity = this.cartService.getQuantity();
  public total: number = this.cartService.getTotal();

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.total = this.cartService.getTotal();
  }

  // changeActive() {
  //   this.changeActiveEvent.emit();
  //   this.total = this.cartService.getTotal();
  // }

  increment(i: number) {
    this.quantity[i]++;
    this.cartService.setQuantity(this.quantity[i], i);
    this.total = this.cartService.getTotal();
  }

  decrement(i: number) {
    if (this.quantity[i] >= 2) {
      this.quantity[i]--;
      this.cartService.setQuantity(this.quantity[i], i);
      this.total = this.cartService.getTotal();
    }
  }
}
