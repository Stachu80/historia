import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../services/search.service';
import {PagerService} from '../services';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(data => {
      });
  }

  @Output()
  eventTask = new EventEmitter<string>();

  @Output()
  eventTask1 = new EventEmitter();


  onNameKeyUp(event) {
    this.eventTask.emit(event.target.value);
  }

  getPosts() {
    this.eventTask1.emit();
  }

  ngOnInit() {
  }

}
