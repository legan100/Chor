import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavComponent } from './nav/nav.component';
import { ImprintComponent } from './Webseiten/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
