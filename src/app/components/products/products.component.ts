import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit
{

	constructor() {}

	ngOnInit(): void {}

	products: Product[] = [
		{
			id: 1,
			name: 'El mejor juguete',
			price: 565,
			image: '../../assets/images/toy.jpg'
		},
		{
			id: 2,
			name: 'Bicicleta casi nueva',
			price: 356,
			image: '../../assets/images/bike.jpg'
		},
		{
			id: 3,
			name: 'Colección de álbumes',
			price: 34,
			image: '../../assets/images/album.jpg'
		},
		{
			id: 4,
			name: 'Mis libros',
			price: 23,
			image: '../../assets/images/books.jpg'
		},
		{
			id: 5,
			name: 'Casa para perro',
			price: 34,
			image: '../../assets/images/house.jpg'
		},
		{
			id: 6,
			name: 'Gafas',
			price: 4,
			image: '../../assets/images/glasses.jpg'
		}
	]
}
