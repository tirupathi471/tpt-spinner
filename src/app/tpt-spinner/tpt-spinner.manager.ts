import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TptSpinnerManager {

  private spinnerSub = new BehaviorSubject(false);
  public $spinner = this.spinnerSub.asObservable();
  show() {
    this.spinnerSub.next(true);
  }

  hide() {
    this.spinnerSub.next(false);
  }
}
