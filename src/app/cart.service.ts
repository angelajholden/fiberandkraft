import { IProduct } from './iproduct.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  quantity: number[] = [];
  total: number = 0;

  constructor() {}

  addToCart(product: IProduct, num: number) {
    this.items.push(product);
    this.quantity.push(num);
    this.total = this.getTotal();
    //console.log(this.total);
  }

  getTotal() {
    this.total = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.total += this.items[i].cost * this.quantity[i];
    }
    return this.total;
  }

  getItems() {
    return this.items;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quant: number, index: number) {
    this.quantity[index] = quant;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.quantity.splice(index, 1);
  }
}
