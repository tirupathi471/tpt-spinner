import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
