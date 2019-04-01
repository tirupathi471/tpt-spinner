import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TptSpinnerComponent } from './tpt-spinner.component';
import { TptSpinnerManager } from './tpt-spinner.manager';

@NgModule({
  declarations: [
    TptSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TptSpinnerManager
  ],
  exports: [
    TptSpinnerComponent
  ]
})
export class TptSpinnerModule { }
