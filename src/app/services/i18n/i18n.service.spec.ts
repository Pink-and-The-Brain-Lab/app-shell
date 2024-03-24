import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { LocalStorageManager } from 'millez-web-components/dist/components';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            NgxsModule.forRoot([]),
        ],
        providers: [
            TranslatePipe,
        ]
    });
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start', () => {
    const translateService = TestBed.inject(TranslateService);
    const translateServiceSpy = spyOn(translateService, 'addLangs');
    const componentSpy = spyOn(service, 'buildLanguageOptions' as any);
    service.start();
    expect(translateServiceSpy).toHaveBeenCalled();
    expect(componentSpy).toHaveBeenCalled();
  });

  it('should build language aoptions', () => {
    const translateService = TestBed.inject(TranslateService);
    const translateServiceSpy = spyOn(translateService, 'get').and.returnValue(of({}));
    const localStorage = TestBed.inject(LocalStorageManager);
    const localStorageSpy = spyOn(localStorage, 'set');
    service['buildLanguageOptions']();
    expect(translateServiceSpy).toHaveBeenCalled();
    expect(localStorageSpy  ).toHaveBeenCalled();
  });

  it('should chenge the language', () => {
    const translateService = TestBed.inject(TranslateService);
    const translateServiceSpy = spyOn(translateService, 'use');
    const store = TestBed.inject(Store);
    const storeSpy = spyOn(store, 'dispatch');
    service.changeLanguage({} as any);
    expect(translateServiceSpy).toHaveBeenCalled();
    expect(storeSpy  ).toHaveBeenCalled();
  });
});
