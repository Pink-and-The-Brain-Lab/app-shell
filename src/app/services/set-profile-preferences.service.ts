import { Injectable, inject } from "@angular/core";
import { IProfile, LocalStorageManager, Storage, Theme, ThemeChangerService } from "millez-web-components/dist/components";
import { I18nService } from "./i18n/i18n.service";

@Injectable({ providedIn: "root" })
export class SetProfilePreferencesService {
   
  private readonly themeChangerService = inject(ThemeChangerService);
  private readonly localStorageManager = inject(LocalStorageManager);
  private readonly i18nService = inject(I18nService);
  
  setPreferences(profile: IProfile) {
    this.themeChangerService.loadTheme(profile.profileTheme as any || Theme.DARK);
    this.localStorageManager.set<string>(Storage.SELECTED_THEME, profile.profileTheme || Theme.DARK);
    this.i18nService.changeLanguage({ value: profile.language || 'en', label: '' });
    this.localStorageManager.set<string>(Storage.SELECTED_LAGUAGE, profile.language || 'en');
  }
}
