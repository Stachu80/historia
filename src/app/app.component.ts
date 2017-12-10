import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {PagerService} from './services';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  posts: any;
  pager: any = {};
  pagedItems: any;

  readonly ROOT_URL = 'https://gwo.pl/booksApi/v1/search?query=historia';

  constructor(private http: HttpClient, private pagerService: PagerService) {
  }


  ngOnInit() {
  }

  clickButton() {
    this.http.get(this.ROOT_URL).subscribe(data => {
      this.posts = data;
      this.setPage(1);
    });

  }

  searchText(text: string) {
    console.log(text);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.posts.length, page);
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
