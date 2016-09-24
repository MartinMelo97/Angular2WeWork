import { AlumnosComponent } from './alumnos/alumnos.component'
import { ShopComponent } from './shop/shop.component'
import { HolaAngularComponent } from './hola-angular/hola-angular.component'

export const APP_ROUTES = [
	{
		path:'',
		component: HolaAngularComponent
	},
	{
		path:'alumnos',
		component: AlumnosComponent
	},
	{
		path:'shop',
		component: ShopComponent
	}
]