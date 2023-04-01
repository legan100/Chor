import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Webseiten/about-us/about-us.component';
import { ImprintComponent } from './Webseiten/imprint/imprint.component';
import { TermineComponent } from './Webseiten/termine/termine.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MenuAppComponent } from './menu-app/menu-app.component';

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
    BrowserModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
