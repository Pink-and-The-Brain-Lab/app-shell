import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {

  quickMenuControl = false;

  openQuickMenu() {
    this.quickMenuControl = true;
  }

  closeQuickMenu = () => this.quickMenuControl = false;

}
