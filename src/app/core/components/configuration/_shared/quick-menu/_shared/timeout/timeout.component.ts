import { Component } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent {

  controlTimeoutptions = false;

  showTimeoutOptions() {
    this.controlTimeoutptions = true;
  }

  closeTimeoutOptions = () => this.controlTimeoutptions = false;

}
