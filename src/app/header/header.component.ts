import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../services/search.service';
import {PagerService} from '../services';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm$ = new Subject<string>();

  ngOnInit() {
  }

  constructor() {
  }

  @Output()
  eventTask = new EventEmitter<string>();

  onNameKeyUp(event) {
    this.eventTask.emit(event.target.value);
  }

}
