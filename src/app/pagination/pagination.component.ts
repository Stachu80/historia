import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../services/search.service';
import {Subject} from 'rxjs/Subject';
import {PagerService} from '../services';
import {CommunicationService} from '../services/communication.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnDestroy {
  private bookList: any;


  protected pager: any = {};
  protected booksOnPage: any;
  private searchTerm$ = new Subject<string>();

  private inputText: Subscription;
  private bookSubscription: Subscription;

  constructor(private pagerService: PagerService, private searchService: SearchService, private communication: CommunicationService) {

    this.bookSubscription = this.searchService.search(this.searchTerm$).subscribe(data => {
      this.bookList = data;
      this.setPage(1);
    });

    this.inputText = this.communication.getInputTextFromService().subscribe(data => {
      this.searchTerm$.next(data);
    });
  }

  ngOnDestroy(): void {
    this.inputText.unsubscribe();
    this.bookSubscription.unsubscribe();
  }

  private setPage(page: number) {

    if (page < 1 || (page > this.pager.totalPages && this.pager.totalPages !== 0)) {
      return;
    }
    this.pager = this.pagerService.getPager(this.bookList.length, page);
    this.booksOnPage = this.bookList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.communication.sendBooksOnPageToService(this.booksOnPage);
  }
}
