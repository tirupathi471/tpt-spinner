import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TptSpinnerComponent } from './tpt-spinner.component';

describe('TptSpinnerComponent', () => {
  let component: TptSpinnerComponent;
  let fixture: ComponentFixture<TptSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TptSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TptSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
