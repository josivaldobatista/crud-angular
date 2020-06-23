import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../../products/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product 

  constructor(
    private productServer: ProductsService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productServer.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productServer.delete(this.product.id).subscribe(() => {
      this.productServer.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
