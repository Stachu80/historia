import {Component} from '@angular/core';
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
    this.communication.sendInputTextToService(event.target.value);
  }

}
