import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { ALUMNOS } from './mocks';
import { Producto } from './producto';
import { PRODUCTOS } from './productosData';
import { AlumnoService } from './aversijala.service';
@Component({
  selector: 'app-aversijala',
  templateUrl: './aversijala.component.html',
  styleUrls: ['./aversijala.component.css']
})
export class AversijalaComponent implements OnInit {

  constructor(private alumnoService:AlumnoService){}
  alumnos : Alumno [];
  productos : Producto [];

  ngOnInit() {
    this.alumnoService.getAlumnos()
    .subscribe(alumnos => this.alumnos = alumnos)
  	this.alumnos = ALUMNOS;
  	this.productos = PRODUCTOS;
  }

  addFalta(alumno){
    if(alumno.faltas < 4) alumno.faltas ++
  }

  removeFalta(alumno){
    if(alumno.faltas > 0) alumno.faltas --
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
