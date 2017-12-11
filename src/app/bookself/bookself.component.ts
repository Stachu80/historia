import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookself',
  templateUrl: './bookself.component.html',
  styleUrls: ['./bookself.component.css']
})
export class BookselfComponent implements OnInit {

  constructor() {
  }

  @Input()
  bookPost;

  ngOnInit() {
  }

}
