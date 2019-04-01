import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { TptSpinnerModule } from '../tpt-spinner/tpt-spinner.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    TptSpinnerModule
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
