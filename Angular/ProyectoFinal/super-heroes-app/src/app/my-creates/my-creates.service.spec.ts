import { TestBed } from '@angular/core/testing';

import { MyCreatesService } from './my-creates.service';

describe('MyCreatesService', () => {
  let service: MyCreatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCreatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
