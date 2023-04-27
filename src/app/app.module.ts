import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Webseiten/about-us/about-us.component';
import { ImprintComponent } from './Webseiten/imprint/imprint.component';
import { TermineComponent } from './Webseiten/termine/termine.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const appRoute:Routes = [
  {path: 'impressum', component:ImprintComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'termine', component:TermineComponent},
  {path: '', component:StartseiteComponent},
  //{path: 'toolbar-about-us', component:MenuAppComponent}
  {path: '**', redirectTo: '/termine' }
  ]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ImprintComponent,
    TermineComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})


export class AppModule { }  

