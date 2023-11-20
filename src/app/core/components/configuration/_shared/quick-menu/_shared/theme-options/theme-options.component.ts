import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-options',
  templateUrl: './theme-options.component.html',
  styleUrls: ['./theme-options.component.scss']
})
export class ThemeOptionsComponent {
  controlThemeOptions = false;

  showThemeOptions() {
    this.controlThemeOptions = true;
  }

  closeThemeOptions = () => this.controlThemeOptions = false;
}
