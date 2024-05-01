import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct.model';
import { ProductListService } from '../product-list.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  public product: IProduct | undefined = undefined;
  public quantity: number = 1;

  constructor(
    private productListService: ProductListService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const endPoint = params['endPoint'];
      this.fetchProduct(endPoint);
    });
  }

  fetchProduct(endPoint: string) {
    this.productListService.getProduct(endPoint).subscribe({
      next: (data: IProduct) => {
        this.product = data;
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      },
    });
  }

  incrementQuantity() {
    if (this.product && this.quantity < this.product.quantity) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: IProduct | undefined, quantity: number) {
    if (product) {
      this.cartService.addToCart(product, quantity);
    } else {
      // Handle the case where product is undefined
      console.error('Product is undefined');
    }
  }
}
