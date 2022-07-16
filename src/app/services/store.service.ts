import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
	private shoppingCart: Product[] = [];

	get shoppingCartArray(): Product[] {
		return this.shoppingCart;
	}

	constructor() { }

	addToShoppingCart(product: Product): void {
		this.shoppingCart.push(product);
	}
}
