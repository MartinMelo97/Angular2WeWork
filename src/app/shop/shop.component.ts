import { Component, OnInit } from '@angular/core';
import { Producto } from './productos';
import { PRODUCTOS } from './productosData';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

   productos : Producto [];

  ngOnInit() {
  	this.productos = PRODUCTOS;
  }

  addProduct(producto){
  	if(producto.quantity < producto.stock) producto.quantity ++

  }

  removeProduct(producto){
  	if(producto.quantity > 0)  producto.quantity --
  }

  quedan(producto){
    let restan;
    restan = producto.stock - producto.quantity;
    return restan;
  }

  total() {
    let total = 0;
    let suma;
    for(let producto of this.productos) {

      suma = producto.quantity * producto.price;
      total += suma;

    }
    return total;
  }

  pedido(producto){
    let pedido
    return pedido = `pediste ${producto.quantity} de ${producto.name}`
  }

}
