import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { globalRoutes } from "./modules/global/global.routing";
import { carritoRoutes } from "./modules/carrito/carrito.routing";
import { contactRoutes } from "./modules/contact/contact.routing";
import { detailRoutes } from "./modules/detail/detail.routing";
import { productosRoutes } from "./modules/productos/productos.routing";

@NgModule({
  imports: [RouterModule.forChild([
    ...globalRoutes,
    ...carritoRoutes,
    ...contactRoutes,
    ...detailRoutes,
    ...productosRoutes
  ])],
  exports:[RouterModule]
})
export class RutasModule{}
