import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPrecioComponent } from './components/filtro-precio/filtro-precio.component';
import { FiltroColorComponent } from './components/filtro-color/filtro-color.component';
import { FiltroTallaComponent } from './components/filtro-talla/filtro-talla.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';



@NgModule({
  declarations: [
    FiltroPrecioComponent,
    FiltroColorComponent,
    FiltroTallaComponent,
    CatalogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
