import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { TptSpinnerManager } from './tpt-spinner.manager';

@Component({
  selector: 'tpt-spinner',
  template: `
  <div class="spinner" *ngIf="show">
  <div class="container">
    <div class="inner_container">
      <div class="tpt-logo" [style.margin-left.px]="(width/2)*-1">
        <img src="{{spinnerURL}}" *ngIf="template===undefined" [style.max-width.px]="width" [style.max-height.px]="height">
        <ng-container *ngTemplateOutlet="template;"></ng-container>
      </div>
    </div>
  </div>
</div>`,
  styleUrls: ['./tpt-spinner.component.scss']
})
export class TptSpinnerComponent implements OnInit {
  @Input() width = 130;
  @Input() height = 130;
  @Input() spinnerURL = '/assets/images/tpt-spinner-img.gif';
  show = false;
  constructor(private spinnerManager: TptSpinnerManager) { }
  @ContentChild(TemplateRef) template;
  ngOnInit() {
    this.spinnerManager.$spinner.subscribe(flag => {
      this.show = flag;
    });
  }

}
