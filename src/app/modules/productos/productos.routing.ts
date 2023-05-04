import { Routes  } from "@angular/router";
import { CatalogoComponent } from "./components/catalogo/catalogo.component";

 export const productosRoutes : Routes =[
  {
    path:'productos/catalogo',
    component:CatalogoComponent,
    loadChildren:()=>import('./productos.module').then(m =>  m.ProductosModule)
  }

];
