import { Component } from '@angular/core';
import { Product } from './Product.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent
{
	products: Product[] = [
		{
		  name: 'EL mejor juguete',
		  price: 565,
		  image: 'https://source.unsplash.com/random'
		},
		{
		  name: 'Bicicleta casi nueva',
		  price: 356,
		  image: 'https://source.unsplash.com/random'
		},
		{
		  name: 'Colleción de albumnes',
		  price: 34,
		  image: 'https://source.unsplash.com/random'
		},
		{
		  name: 'Mis libros',
		  price: 23,
		  image: 'https://source.unsplash.com/random'
		},
		{
		  name: 'Casa para perro',
		  price: 34,
		  image: 'https://source.unsplash.com/random'
		},
		{
		  name: 'Gafas',
		  price: 3434,
		  image: 'https://source.unsplash.com/random'
		}
	  ]
}
