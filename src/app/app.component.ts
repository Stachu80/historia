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
  postsList: any;
  pager: any = {};
  pagedItems: any;
  search: string;
  readonly ROOT_URL = 'https://gwo.pl/booksApi/v1/search?query=historia';

  constructor(private http: HttpClient, private pagerService: PagerService) {
  }

  ngOnInit() {
    try {
      this.http.get(this.ROOT_URL).subscribe(data => {
        this.posts = data;
        this.postsList = data;
        this.setPage(1);
      });
    } catch (e) {
      console.log(e.status);
    }

  }

  clickButton() {
    this.http.get(this.ROOT_URL).subscribe(data => {
      this.posts = data;
      this.postsList = data;
      this.setPage(1);
    });

  }

  searchText(text: string) {
    this.search = text;
    if (text.length > 3) {
      this.postsList = this.posts.filter(tag => {

        return tag.author.indexOf(text) >= 0;
      });
    } else {
      this.postsList = this.posts;
    }
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.postsList.length, page);
    this.pagedItems = this.postsList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('this.postsList' + this.pagedItems);
  }
}
