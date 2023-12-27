import { Component, inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { I18nService } from './services/i18n/i18n.service';
import { ThemeChangerService } from './services/theme/theme-changer.service';

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

  constructor(
    private authService: AuthService,
    private i18nService: I18nService,
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.i18nService.start();
    this.themeChangerService.loadTheme('dark');
  }

  actionsBarEvent() {
    this.toogleActionsBar = !this.toogleActionsBar;
  }
}
