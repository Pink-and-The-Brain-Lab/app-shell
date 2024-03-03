import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { ILanguageOption, LanguageChangeAction, LocalStorageManager, Storage } from 'millez-web-components/dist/components';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private readonly localStorageManager = inject(LocalStorageManager);
  private readonly translateService = inject(TranslateService);
  private readonly store = inject(Store);
  languageOptions: ILanguageOption[] = [];

  start() {
    this.translateService.addLangs(['en', 'pt', 'es', 'fr']);
    this.translateService.setDefaultLang('en');
    this.store.dispatch( new LanguageChangeAction({ language: 'en' }) );
    this.buildLanguageOptions();
  }

  private buildLanguageOptions() {
    const ENGLISH =  this.translateService.get('ENGLISH');
    const PORTUGUESE = this.translateService.get('PORTUGUESE');
    const SPANISH = this.translateService.get('SPANISH');
    const FRENCH = this.translateService.get('FRENCH');

    forkJoin([
      ENGLISH,
      PORTUGUESE,
      SPANISH,
      FRENCH
    ]).subscribe(
      _response => {
        this.languageOptions = [{
          value: 'en',
          label: _response[0],
        }, {
          value: 'pt',
          label: _response[1],
        }, {
          value: 'es',
          label: _response[2],
        }, {
          value: 'fr',
          label: _response[3],
        }];

        this.localStorageManager.set<ILanguageOption[]>(Storage.LANGUAGE_OPTIONS, this.languageOptions);
      }
    );
  }

  changeLanguage(language: ILanguageOption) {
    this.translateService.use(language.value);
    this.store.dispatch( new LanguageChangeAction({ language: language.value }) );
  }
}
