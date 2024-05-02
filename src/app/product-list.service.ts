import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct.model';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private apiUrl =
    // 'https://fiberandkraftdb-6eb9fbd231fe.herokuapp.com/api/products';
    'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Inside ProductListService
  getProduct(endPoint: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${endPoint}`);
  }
}
