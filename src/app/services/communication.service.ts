import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommunicationService {
  inputText = new Subject<string>();
  booksOnPage = new Subject<any>();

  constructor() {
  }

  sendBooksOnPageToService(arr) {
    this.booksOnPage.next(arr);
  }

  getBooksOnPageFromService(): Observable<any> {
    return this.booksOnPage.asObservable();
  }

  sendInputTextToService(text) {
    this.inputText.next(encodeURI(text));
  }

  getInputTextFromService(): Observable<string> {
    return this.inputText.asObservable();
  }

}
