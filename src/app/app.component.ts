import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { I18nService } from './services/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'millez';
  toogleActionsBar = false;
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private i18nService: I18nService,
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.i18nService.start();
  }

  actionsBarEvent() {
    this.toogleActionsBar = !this.toogleActionsBar;
  }
}
