import {TestBed, inject} from '@angular/core/testing';

import {SearchService} from './search.service';

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http]
    });
  });

  /*it('should be created',  inject([SearchService], (service) => {

   // service.getInputTextFromService().subscribe((data) => {
     // expect(data.length).toBe(4);
   // });
  }));*/
});
