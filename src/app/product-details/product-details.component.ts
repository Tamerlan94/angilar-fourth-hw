import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { product } from 'src/models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product | undefined;

  constructor(private route: ActivatedRoute, private service: ProductService) {
  }

  ngOnInit(): void {
    this.showProduct();
  }

  showProduct() {
    let id = this.route.snapshot.paramMap.get('id') ?? '0';
    let p = this.service.getProduct(parseInt(id));
    if (typeof p == undefined) {
      this.product = new product(0, 'No product', 'No product', 'No product', 0);
    } else {
      this.product = p;
    }
    // this.route.params.subscribe(params => id = params['id']);
  }
}
