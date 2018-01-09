import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommunicationService {

  private inputText = new Subject<string>();
  private booksOnPage = new Subject<any>();

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
