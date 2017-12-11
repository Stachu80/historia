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
  posts: any;
  postsList: any;
  pager: any = {};
  pagedItems: any;
  search: string;
  results: Object;
  searchTerm$ = new Subject<string>();
  providers: [SearchService];

  constructor(private pagerService: PagerService, private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(data => {
        console.log('result11' + data);
        this.postsList = data;
        this.setPage(1);
      });
  }


  ngOnInit() {
  }

  searchText(text) {
    console.log(text)
    // this.searchTerm$.next($event.target.value);
    /* this.search = text;
     if (text.length >= 3) {
       this.allPost$ = this.httpConnect.searchEngine(text);
       this.allPost$.subscribe(data => {
         this.postsList = data;
         this.setPage(1);
       });
     }*/
  }


  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    if (this.postsList.length > 0) {
      this.pager = this.pagerService.getPager(this.postsList.length, page);
      this.pagedItems = this.postsList.slice(this.pager.startIndex, this.pager.endIndex + 1);
      console.log(this.pagedItems);
    }
  }
}
