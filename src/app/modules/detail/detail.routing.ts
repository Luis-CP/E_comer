import { Routes  } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const detailRoutes : Routes =[
  {
    path:'detail/index',
    component:IndexComponent,
    loadChildren:()=>import('./detail.module').then(m =>  m.DetailModule)
  }

];
