import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private productsService: ProductListService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
