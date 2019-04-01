import { TestBed } from '@angular/core/testing';

import { TptSpinnerManager } from './tpt-spinner.manager';

describe('TptSpinnerManager', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TptSpinnerManager = TestBed.get(TptSpinnerManager);
    expect(service).toBeTruthy();
  });
});
