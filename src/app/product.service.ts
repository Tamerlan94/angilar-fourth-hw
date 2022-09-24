import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { product, products } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: product[] = products;

  constructor(private client: HttpClient) { }

  getProducts() {    
    return this.products;
  }
  getProduct(id: number) {
    return this.products.find((item) => item.id === id);
  }
  deleteProduct(id: number) {
    return this.products = this.products.filter((item) => item.id !== id);
  }
}
