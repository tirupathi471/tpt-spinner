import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { TptSpinnerModule } from 'projects/tpt-spinner/src/public-api';

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
