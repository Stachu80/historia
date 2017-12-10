import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PagerService} from './services';
import 'rxjs/add/operator/map';
import {HttpConnectionService} from './services/http-connection.service';

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

  ngOnInit() {
    this.httpConnect.getPost().subscribe(data => {
      this.postsList = data;
      this.posts = data;
      this.setPage(1);
    });
  }

  searchText(text: string) {
    this.search = text;
    if (text.length >= 3) {
      this.postsList = this.posts;
      this.postsList = this.postsList.filter(tag => {

        return tag.author.indexOf(text) >= 0;
      });
      if (this.postsList.length === 0) {
        this.postsList = this.posts;
      }

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
  }
}
