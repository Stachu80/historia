import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from '../services/communication.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-bookself',
  templateUrl: './bookself.component.html',
  styleUrls: ['./bookself.component.css']
})
export class BookselfComponent {
  booksOnPage: Observable<any>;

  constructor(private communication: CommunicationService) {
    /*this.communication.getBooksOnPageFromService().subscribe(data => {
      this.booksOnPage = data;
    });*/
    this.booksOnPage = this.communication.getBooksOnPageFromService();
  }
}

