import {TestBed, inject} from '@angular/core/testing';

import {PagerService} from './pager.service';

describe('PagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagerService]
    });
  });

  it('should be created', inject([PagerService], (service: PagerService) => {
    expect(service).toBeTruthy();
  }));

  it('total pages if total items = 12 and pagesize = 6 is 2', inject([PagerService], (service: PagerService) => {
    const result = service.getPager(12, 3, 6).totalPages;
    expect(result).toBe(2);
  }))

  it('start index on page 3 is 12', inject([PagerService], (service: PagerService) => {
    const result = service.getPager(100, 3, 6).startIndex;
    expect(result).toBe(12);
  }))

  it('end index on page 3 is 17', inject([PagerService], (service: PagerService) => {
    const result = service.getPager(100, 3, 6).endIndex;
    expect(result).toBe(17);
  }))

  it('start index on page 20 is 114', inject([PagerService], (service: PagerService) => {
    const result = service.getPager(100, 20, 6).startIndex;
    expect(result).toBe(114);
  }));

});
