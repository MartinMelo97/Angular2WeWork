import { Component } from '@angular/core';
import { HolaAngularComponent } from './hola-angular/hola-angular.component';
import {AversijalaComponent} from './aversijala/aversijala.component';
import {ElqueyocreeComponent} from './elqueyocree/elqueyocree.component';
import { AlumnosService} from './aversijala/aversijala.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AlumnosService]
})
export class AppComponent {
  title = 'Hola Mundo!';
  hola = 'que onda morros';
}
