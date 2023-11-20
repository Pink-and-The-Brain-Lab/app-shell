import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-option',
  templateUrl: './theme-option.component.html',
  styleUrls: ['./theme-option.component.scss']
})
export class ThemeOptionComponent {
  selectedOption = 'Dark';
  themeOptions = ['Dark', 'Light', 'Navy'];

  getSelectedOption(event: string) {
    this.selectedOption = event;
  }
}
