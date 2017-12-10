import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  @Output()
  eventTask = new EventEmitter<string>();

  @Output()
  eventTask1 = new EventEmitter();


  isHidden = false;
  colorHeader = 'color1';

  onNameKeyUp(event) {
    this.eventTask.emit(event.target.value);
  }

  getPosts() {
    this.eventTask1.emit();
  }

  ngOnInit() {
  }

}
