///<reference path="../../../node_modules/@angular/http/src/http.d.ts"/>
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  private baseUrl = 'https://gwo.pl/booksApi/v1/search?query=';

  constructor(private http: Http) {
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400).distinctUntilChanged().switchMap(term => this.searchEntries(term));
  }

  searchEntries(term: string) {
    return this.http.get(this.baseUrl + term)
      .map(res => res.json());
  }
}
