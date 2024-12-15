import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product!: Product;
  id: number = 0;
  private readonly _PLATFORM_ID = inject( PLATFORM_ID );
  
  constructor(
    private productsService: ProductsService,
    activatedRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {
    const idParam = activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;
  }

  ngOnInit(): void {
    this.removeMetaTags();
    this.getProductDetails(this.id);
  }

  getProductDetails(id: number) {
    this.productsService.getProductDetails(id).subscribe({
      next: (res) => {
        this.product = res;

        this.title.setTitle(this.product.title);
        this.meta.addTags([
          { property: 'og:title', content: this.product.title },
          { property: 'og:description', content: this.product.description },
          { property: 'og:image', content: this.product.images[0] },
          ...(isPlatformBrowser(this._PLATFORM_ID)
            ? [{ property: 'og:url', content: window.location.href }]
            : []),
          { property: 'og:type', content: 'website' },
        ]);
      },
    });
  }

  removeMetaTags() {
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("property='og:type'");
  }
}
