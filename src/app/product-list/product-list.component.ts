import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product, products } from 'src/models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[] = [];

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.service.getProducts();
  }

  productDetails(id: number) {
    this.router.navigate(['products', id]);
  }

  removeProduct(id: number) {
    this.products = this.service.deleteProduct(id);
  }
}
