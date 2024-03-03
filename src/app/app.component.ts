import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { I18nService } from './services/i18n/i18n.service';
import { DashboardVisualizationControlState, IDashboardVisualizationControl, LocalStorageManager, Storage, Theme, ThemeChangerService } from 'millez-web-components/dist/components';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Select(DashboardVisualizationControlState) controlDashboard$!: Observable<IDashboardVisualizationControl>;

  title = 'millez';
  toogleActionsBar = false;
  showDashboard = true;
  private readonly themeChangerService = inject(ThemeChangerService);
  private readonly authService = inject(AuthService);
  private readonly i18nService = inject(I18nService);
  private readonly localStorageManager = inject(LocalStorageManager);

  constructor() {
    this.showDashboard = this.authService.isLoggedIn();
    this.i18nService.start();
    this.themeChangerService.loadTheme(Theme.DARK);
  }

  ngOnInit(): void {
    this.controlDashboard$.subscribe(response => this.showDashboard = response.showDashboard);
    this.getLanguageFromStorage();
  }

  actionsBarEvent() {
    this.toogleActionsBar = !this.toogleActionsBar;
  }

  getLanguageFromStorage() {
    const storagedLanguage = this.localStorageManager.get<string>(Storage.SELECTED_LAGUAGE);
    if (storagedLanguage)  this.i18nService.changeLanguage({ value: storagedLanguage, label: '' });
  }
}
