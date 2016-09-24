import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumnos';
import { ALUMNOS } from './alumnosData';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos : Alumno [];
  ngOnInit() {
  	this.alumnos = ALUMNOS;
  }

  addFalta(alumno){
    if(alumno.faltas < 4) alumno.faltas ++
  }

  removeFalta(alumno){
    if(alumno.faltas > 0) alumno.faltas --
  }

}
