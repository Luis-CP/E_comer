import { Routes  } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const contactRoutes : Routes =[
  {
    path:'contact/index',
    component:IndexComponent,
    loadChildren:()=>import('./contact.module').then(m =>  m.ContactModule)
  }

];
