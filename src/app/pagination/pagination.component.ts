import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../services/search.service';
import {Subject} from 'rxjs/Subject';
import {PagerService} from '../services';
import {CommunicationService} from '../services/communication.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  bookList: any;
  pager: any = {};
  booksOnPage: any;
  searchTerm$ = new Subject<string>();

  constructor(private pagerService: PagerService, private searchService: SearchService, private communication: CommunicationService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(data => {
        this.bookList = data;
        console.log(data);
        this.setPage(1);
      });

    this.communication.getInputTextFromService().subscribe(data => {
      if (data.length > 2) {
        this.searchTerm$.next(data);
      }
    });
  }

  private setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    if (this.bookList.length > 0) {
      this.pager = this.pagerService.getPager(this.bookList.length, page);
      this.booksOnPage = this.bookList.slice(this.pager.startIndex, this.pager.endIndex + 1);
      this.communication.sendBooksOnPageToService(this.booksOnPage);
    }
  }
}
