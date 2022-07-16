import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit
{
	shoppingCart: Product[] = [];

	products: Product[] = []

	constructor(
		private storeService: StoreService,
		private productsService: ProductsService
	) {
		this.shoppingCart = storeService.shoppingCartArray;
	}

	ngOnInit(): void {
		this.productsService.getAllProducts().subscribe(
			(products: Product[]) => {
				this.products = products;
			}
		);
	}

	addToShoppingCart(product: Product): void {
		this.storeService.addToShoppingCart(product);
	}
}
