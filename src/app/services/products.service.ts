import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	constructor(
		private httpClient: HttpClient
	) { }

	getAllProducts() {
		return this.httpClient.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products');
	}
}
