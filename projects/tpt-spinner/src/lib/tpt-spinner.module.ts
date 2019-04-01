import { NgModule } from '@angular/core';
import { TptSpinnerComponent } from './tpt-spinner.component';
import { TptSpinnerManager } from './tpt-spinner.manager';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TptSpinnerComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    TptSpinnerManager
  ],
  exports: [TptSpinnerComponent]
})
export class TptSpinnerModule { }
