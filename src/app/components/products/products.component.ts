import { Component } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { Product } from '../../interfaces/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {

  products: Product[] = [];
  
  constructor(private productsService: ProductsService){}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
    });
  }
}
