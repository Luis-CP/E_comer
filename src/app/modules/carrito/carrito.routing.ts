import { Routes  } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const carritoRoutes : Routes =[
  {
    path:'carrito/index',
    component:IndexComponent,
    loadChildren:()=>import('./carrito.module').then(m =>  m.CarritoModule)
  }

];
