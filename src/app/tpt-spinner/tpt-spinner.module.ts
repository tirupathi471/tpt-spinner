import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TptSpinner } from './tpt-spinner.component';
import { TptSpinnerManager } from './tpt-spinner.manager';

@NgModule({
  declarations: [
    TptSpinner
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TptSpinnerManager
  ],
  exports: [
    TptSpinner
  ]
})
export class TptSpinnerModule { }
