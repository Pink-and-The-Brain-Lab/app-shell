import { Component } from '@angular/core';

@Component({
  selector: 'app-timeout-option',
  templateUrl: './timeout-option.component.html',
  styleUrls: ['./timeout-option.component.scss']
})
export class TimeoutOptionComponent {

  selectedOption = '30 minutes';
  timeoutOptions = ['30 minutes', '1 hour', '1 day', 'Never expire'];

  getSelectedOption(event: string) {
    this.selectedOption = event;
  }

}
