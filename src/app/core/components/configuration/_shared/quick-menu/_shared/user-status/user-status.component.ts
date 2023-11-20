import { Component } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent {

  controlStatusOptions = false;

  showStatusOptions() {
    this.controlStatusOptions = true;
  }

  closeStatusOptions = () => this.controlStatusOptions = false;
}
