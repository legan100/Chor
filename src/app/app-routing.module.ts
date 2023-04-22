import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAppComponent } from './menu-body/menu-app.component';

const routes: Routes = [
{path: "app-menu-body", component:MenuAppComponent},
{path: "", redirectTo:"app-menu-body", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
