import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { I18nService } from './services/i18n/i18n.service';
import {
  DashboardVisualizationControlState,
  IDashboardVisualizationControl,
  LocalStorageManager,
  ProfileAction,
  Storage,
  Theme,
  ThemeChangerService,
} from 'millez-web-components/dist/components';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GenericCRUDService } from './services/generic-crud.service';
import { API_PATH } from './configurations/api-path';
import { IProfiles } from './interfaces/profiles.interface';
import { SetProfilePreferencesService } from './services/set-profile-preferences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Select(DashboardVisualizationControlState)
  controlDashboard$!: Observable<IDashboardVisualizationControl>;

  title = 'millez';
  toogleActionsBar = false;
  showDashboard = true;
  private readonly themeChangerService = inject(ThemeChangerService);
  private readonly authService = inject(AuthService);
  private readonly i18nService = inject(I18nService);
  private readonly localStorageManager = inject(LocalStorageManager);
  private readonly genericCRUDService = inject(GenericCRUDService);
  private readonly store = inject(Store);
  private readonly setProfilePreferencesService = inject(SetProfilePreferencesService);

  constructor() {
    this.showDashboard = this.authService.isLoggedIn();
    this.i18nService.start();
    this.themeChangerService.loadTheme(Theme.DARK);
  }

  ngOnInit(): void {
    this.controlDashboard$.subscribe(
      (response) => (this.showDashboard = response.showDashboard)
    );
    this.getLanguageFromStorage();
    this.getProfiles();
  }

  actionsBarEvent() {
    this.toogleActionsBar = !this.toogleActionsBar;
  }

  getLanguageFromStorage() {
    const storagedLanguage = this.localStorageManager.get<string>(Storage.SELECTED_LAGUAGE);
    if (storagedLanguage) this.i18nService.changeLanguage({ value: storagedLanguage, label: '' });
  }

  private getProfiles() {
    this.genericCRUDService
      .genericGet<IProfiles>(API_PATH.getProfiles)
      .subscribe((response) => {
        const profiles = response.profiles;
        if (!profiles.length) return;
        this.store.dispatch( new ProfileAction(profiles) );
        const selectedProfile = profiles.find(item => item.selected);
        if (!selectedProfile) return;
        this.setProfilePreferencesService.setPreferences(selectedProfile);
      });
  }
}
