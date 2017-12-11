import {Component, OnInit} from '@angular/core';
import {PagerService} from './services';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {SearchService} from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postsList: any;
  pager: any = {};
  pagedItems: any;
  searchTerm$ = new Subject<string>();
  providers: [SearchService];

  constructor(private pagerService: PagerService, private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(data => {
        this.postsList = data;
        this.setPage(1);
      });
  }

  ngOnInit() {
  }

  searchText(text) {
    this.searchTerm$.next(encodeURI(text));
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    if (this.postsList.length > 0) {
      this.pager = this.pagerService.getPager(this.postsList.length, page);
      this.pagedItems = this.postsList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }
}
