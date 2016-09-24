import { Alumno } from './alumno';
import { Injectable } from '@angular/core';
import { Http } from '@amgular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlumnosService{
	constructor (private http:Http){}

	getAlumnos(){
		return this.http.get('.app/aversijala/data.json')
		.map(response => <Alumno[]> response.json().data)
	}
}