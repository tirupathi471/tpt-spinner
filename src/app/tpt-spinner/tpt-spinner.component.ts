import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { TptSpinnerManager } from './tpt-spinner.manager';

@Component({
  selector: 'tpt-spinner',
  templateUrl: './tpt-spinner.component.html',
  styleUrls: ['./tpt-spinner.component.scss']
})
export class TptSpinner implements OnInit {
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
