import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
