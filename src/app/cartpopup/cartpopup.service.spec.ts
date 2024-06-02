import { TestBed } from '@angular/core/testing';

import { CartpopupService } from './cartpopup.service';

describe('CartpopupService', () => {
  let service: CartpopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartpopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
