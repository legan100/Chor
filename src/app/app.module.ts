import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Webseiten/about-us/about-us.component';
import { ImprintComponent } from './Webseiten/imprint/imprint.component';
import { TermineComponent } from './Webseiten/termine/termine.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

const appRoute:Routes = [
  {path: 'termine', component: TermineComponent},
  {path: '', component: AboutUsComponent},
  {path: 'impressum', component:ImprintComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ImprintComponent,
    TermineComponent,
    StartseiteComponent,
    MenuAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { } 



