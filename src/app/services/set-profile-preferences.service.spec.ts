import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { SetProfilePreferencesService } from './set-profile-preferences.service';
import { IProfile, LocalStorageManager, Storage, Theme, ThemeChangerService } from 'millez-web-components/dist/components';
import { I18nService } from './i18n/i18n.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const profileMock: IProfile = {
  id: '12345',
  userId: '12345',
  email: 'email@mail.com',
  color: '#fff',
  image: 'image',
  chosenName: 'chosen name',
  profileName: 'profile name',
  profileVisibility: 'profile visibility',
  profileTheme: 'profile theme',
  logoutTime: 'logout time',
  dateFormat: 'date format',
  validated: true,
  selected: true,
  language: 'es',
  createdat: 12234567889,
};

describe('SetProfilePreferencesService', () => {
  let service: SetProfilePreferencesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(),
        NgxsModule.forRoot([])],
    providers: [
        TranslatePipe,
        SetProfilePreferencesService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
    service = TestBed.inject(SetProfilePreferencesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set preferences with profile data', () => {
    const themeChangerService = TestBed.inject(ThemeChangerService);
    const themeChangerServiceSpy = spyOn(themeChangerService, 'loadTheme');
    const localStorageManager = TestBed.inject(LocalStorageManager);
    const localStorageManagerSpy = spyOn(localStorageManager, 'set');
    const i18nService = TestBed.inject(I18nService);
    const i18nServiceSpy = spyOn(i18nService, 'changeLanguage');
    service.setPreferences(profileMock);
    expect(themeChangerServiceSpy).toHaveBeenCalledWith(profileMock.profileTheme as any);
    expect(localStorageManagerSpy).toHaveBeenCalledWith(Storage.SELECTED_THEME, profileMock.profileTheme as any);
    expect(localStorageManagerSpy).toHaveBeenCalledWith(Storage.SELECTED_LAGUAGE, profileMock.language as any);
    expect(i18nServiceSpy).toHaveBeenCalledWith({ value: profileMock.language, label: '' });
  });

  it('should set preferences with default data', () => {
    const themeChangerService = TestBed.inject(ThemeChangerService);
    const themeChangerServiceSpy = spyOn(themeChangerService, 'loadTheme');
    const localStorageManager = TestBed.inject(LocalStorageManager);
    const localStorageManagerSpy = spyOn(localStorageManager, 'set');
    const i18nService = TestBed.inject(I18nService);
    const i18nServiceSpy = spyOn(i18nService, 'changeLanguage');
    service.setPreferences({} as any);
    expect(themeChangerServiceSpy).toHaveBeenCalledWith(Theme.DARK);
    expect(localStorageManagerSpy).toHaveBeenCalledWith(Storage.SELECTED_THEME, Theme.DARK);
    expect(localStorageManagerSpy).toHaveBeenCalledWith(Storage.SELECTED_LAGUAGE, 'en');
    expect(i18nServiceSpy).toHaveBeenCalledWith({ value: 'en', label: '' });
  });
});
