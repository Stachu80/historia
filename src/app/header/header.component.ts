import {Component} from '@angular/core';
import {CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected maxLength: Number = 12;

  constructor(private communication: CommunicationService) {
  }

  onNameKeyUp(event) {
    if (event.target.value.length > 2) {
      this.communication.sendInputTextToService(event.target.value);
    }
  }
}
