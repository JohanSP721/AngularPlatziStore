import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{
	@Input() product!:Product;

	@Output() addedProduct: EventEmitter<Product> = new EventEmitter<Product>();

	constructor() {}

	ngOnInit(): void {}

	onAddToCart(): void {
		this.addedProduct.emit(this.product);
	}
}
