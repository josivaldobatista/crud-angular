import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductsService,
      private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMessage('Produto criado!');
  }
  
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
