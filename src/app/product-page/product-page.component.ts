import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct.model';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: IProduct | undefined = undefined; // Consider setting a default state or structure

  constructor(
    private productsService: ProductListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const endPoint = params['endPoint']; // Using 'endPoint' as the parameter name
      this.fetchProduct(endPoint);
    });
  }

  fetchProduct(endPoint: string) {
    this.productsService.getProduct(endPoint).subscribe({
      next: (data: IProduct) => {
        this.product = data;
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      },
    });
  }
}
