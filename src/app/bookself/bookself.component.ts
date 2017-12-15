import {Component} from '@angular/core';
import {CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-bookself',
  templateUrl: './bookself.component.html',
  styleUrls: ['./bookself.component.css']
})
export class BookselfComponent {

  booksOnPage: Array<any> = [];

  constructor(private communication: CommunicationService) {
    this.communication.getBooksOnPageFromService().subscribe(data => {
      this.booksOnPage = data;
    });
  }
}

