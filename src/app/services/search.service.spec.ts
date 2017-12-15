import {inject, TestBed} from '@angular/core/testing';
import {HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {SearchService} from './search.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

describe('SearchService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        SearchService,
        {provide: XHRBackend, useClass: MockBackend},
      ]
    });
  });

  describe('searchEntries should return data from http', () => {

    it('data',
      inject([SearchService, XHRBackend], (service, mockBackend) => {

        const mockResponse = {
          data: [
            {
              'title': 'Biologia 2. Seria z tangramem. Teoria i \u0107wiczenia',
              'author': 'T. Greenwood, R. Allan, L. Shepherd, B. S\u0105gin, M. Skodowska',
              'isbn': '9788374200677',
              'men': '133\/07',
              'pages_count': 100,
              'levels': [{'school': 'szko\u0142a \u015brednia', 'class': 'klasa 2'}],
              'subject': 'biologia',
              'type': 'podr\u0119cznik',
              'cover': 'https:\/\/files.gwo.pl\/covers\/books\/0\/257.jpg',
              'url': 'https:\/\/gwo.pl\/ksiegarnia\/ksiazka\/257,biologia-2-seria-z-tangramem-teoria-i-cwiczenia'
            },
            {
              'title': 'Biologia 3. Seria z tangramem. Teoria i \u0107wiczenia',
              'author': 'T. Greenwood, R. Allan, L. Shepherd, B. S\u0105gin, M. Skodowska',
              'isbn': '9788374201063',
              'men': '211\/08',
              'pages_count': 140,
              'levels': [{'school': 'szko\u0142a \u015brednia', 'class': 'klasa 3'}],
              'subject': 'biologia',
              'type': 'podr\u0119cznik',
              'cover': 'https:\/\/files.gwo.pl\/covers\/books\/0\/268.jpg',
              'url': 'https:\/\/gwo.pl\/ksiegarnia\/ksiazka\/268,biologia-3-seria-z-tangramem-teoria-i-cwiczenia'
            }

          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.searchEntries('fizy').subscribe((books) => {
          expect(books.data.length).toBe(2);
          console.log(books.data.length);
          expect(books.data[1].title).toEqual('Biologia 3. Seria z tangramem. Teoria i \u0107wiczenia');
        });

      }));
  });
});
