import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../services/search.service';
import {PagerService} from '../services';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private communication: CommunicationService) {
  }

  onNameKeyUp(event) {
    if (event.target.length > 12) {
      // event.target.length.
    }
    this.communication.sendInputTextToService(event.target.value);
  }
}
