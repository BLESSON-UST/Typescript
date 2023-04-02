import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCardComponent } from './menu-card/menu-card.component';

const routes: Routes = [{path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:MenuCardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
