import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Webseiten/about-us/about-us.component';
import { ImprintComponent } from './Webseiten/imprint/imprint.component';
import { TermineComponent } from './Webseiten/termine/termine.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { MenuAppComponent } from './toolbar-elements/toolbar-about-us/menu-app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarTermineComponent } from './toolbar-elements/toolbar-termine/toolbar-termine.component';

const appRoute:Routes = [
  {path: 'impressum', component:ImprintComponent},
  {path: 'toolbar-about-us', component:MenuAppComponent},
  {path: 'toolbar-termine', component:MenuAppComponent},
  {path: '', component:MenuAppComponent},
  //{path: 'toolbar-about-us', component:MenuAppComponent}
  {path: '**', redirectTo: '/termine' }
  ]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ImprintComponent,
    TermineComponent,
    StartseiteComponent,
    MenuAppComponent,
    ToolbarTermineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { } 



