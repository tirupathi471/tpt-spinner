import { Component, OnInit } from '@angular/core';
import { TptSpinnerManager } from 'projects/tpt-spinner/src/public-api';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private spinnerManager: TptSpinnerManager) { }

  ngOnInit() {
  }

  show() {
    this.spinnerManager.show();
    setTimeout(() => {
      // this.spinnerManager.hide();

    }, 5000);
  }
  hide() {
    this.spinnerManager.hide();
  }
}
