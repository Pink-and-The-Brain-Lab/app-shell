import { Component, inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { I18nService } from './services/i18n/i18n.service';
import { Theme, ThemeChangerService } from 'millez-components-lib/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'millez';
  toogleActionsBar = false;
  isLoggedIn = true;
  private readonly themeChangerService = inject(ThemeChangerService);
  private readonly authService = inject(AuthService);
  private readonly i18nService = inject(I18nService);

  constructor() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.i18nService.start();
    this.themeChangerService.loadTheme(Theme.DARK);
  }

  actionsBarEvent() {
    this.toogleActionsBar = !this.toogleActionsBar;
  }
}
