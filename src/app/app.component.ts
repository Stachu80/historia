import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PagerService} from './services';
import 'rxjs/add/operator/map';
import {Book, HttpConnectionService} from './services/http-connection.service';
import {Observable} from 'rxjs/Observable';

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

  constructor(private pagerService: PagerService, private httpConnect: HttpConnectionService) {
  }

  allPost$: Observable<Array<Book>>;

  ngOnInit() {
  }

  searchText(text: string) {
    this.search = text;
    if (text.length >= 3) {
      this.allPost$ = this.httpConnect.searchEngine(text);
      this.allPost$.subscribe(data => {
        this.postsList = data;
        this.setPage(1);
      });
    }
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
