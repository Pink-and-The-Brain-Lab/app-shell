import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AvatarModule, LocalStorageManager, UserStatusBulletModule } from 'millez-web-components/dist/components';
import { HeaderModule } from './core/components/header/header.module';
import { ToolsBarModule } from './core/components/tools-bar/tools-bar.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ActionsBarModule } from './core/components/actions-bar/actions-bar.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgxsModule, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import TOASTR_SERVICE_MOCK from './mocks/toastr-service.test.mock';
import { I18nService } from './services/i18n/i18n.service';
import { GenericCRUDService } from './services/generic-crud.service';
import { of } from 'rxjs';
import { SetProfilePreferencesService } from './services/set-profile-preferences.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
            DashboardModule,
            AvatarModule,
            UserStatusBulletModule,
            HeaderModule,
            ToolsBarModule,
            BrowserAnimationsModule,
            HttpClientModule,
            ActionsBarModule,
            HttpClientTestingModule,
            NoopAnimationsModule,
            RouterTestingModule.withRoutes([]),
            TranslateModule.forRoot(),
            NgxsModule.forRoot([]),
        ],
        providers: [
          TranslatePipe,
          { provide: ToastrService, useValue: TOASTR_SERVICE_MOCK },
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle actions bar', () => {
    component.actionsBarEvent();
    expect(component.toogleActionsBar).toBeTrue();
  });

  it('should get selected language', () => {
    const localStorageManager = TestBed.inject(LocalStorageManager);
    const localStorageManagerSpy = spyOn(localStorageManager, 'get').and.returnValue('en');
    const i18nService = TestBed.inject(I18nService);
    const i18nServiceSpy = spyOn(i18nService, 'changeLanguage');
    component.getLanguageFromStorage();
    expect(localStorageManagerSpy).toHaveBeenCalled();
    expect(i18nServiceSpy).toHaveBeenCalledWith({ value: 'en', label: '' });
  });

  it('should do not get profiles', () => {
    const store = TestBed.inject(Store);
    const storeSpy = spyOn(store, 'dispatch');
    const genericCRUDService = TestBed.inject(GenericCRUDService);
    const genericCRUDServiceSpy = spyOn(genericCRUDService, 'genericGet').and.returnValue(of({ profiles: [] }));
    component['getProfiles']();
    expect(storeSpy).not.toHaveBeenCalled();
    expect(genericCRUDServiceSpy).toHaveBeenCalled();
  });

  it('should get profiles', () => {
    const mock = { profiles: [{}] };
    const store = TestBed.inject(Store);
    const storeSpy = spyOn(store, 'dispatch');
    const genericCRUDService = TestBed.inject(GenericCRUDService);
    const genericCRUDServiceSpy = spyOn(genericCRUDService, 'genericGet').and.returnValue(of(mock));
    component['getProfiles']();
    expect(storeSpy).toHaveBeenCalled();
    expect(genericCRUDServiceSpy).toHaveBeenCalled();
  });

  it('should get profiles and update preferences', () => {
    const mock = {
        profiles: [{
            selected: true
        }]
    };
    const setProfilePreferencesService = TestBed.inject(SetProfilePreferencesService);
    const setProfilePreferencesServiceSpy = spyOn(setProfilePreferencesService, 'setPreferences');
    const genericCRUDService = TestBed.inject(GenericCRUDService);
    const genericCRUDServiceSpy = spyOn(genericCRUDService, 'genericGet').and.returnValue(of(mock));
    component['getProfiles']();
    expect(setProfilePreferencesServiceSpy).toHaveBeenCalled();
    expect(genericCRUDServiceSpy).toHaveBeenCalled();
  });
});
