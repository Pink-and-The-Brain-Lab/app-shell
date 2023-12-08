import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguageOption, LocalStorageManager } from 'millez-components-lib/components';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  languageOptions: ILanguageOption[] = [];

  constructor(
    public translateService: TranslateService,
  ) {}

  start() {
    this.translateService.addLangs(['en', 'pt', 'es', 'fr']);
    this.translateService.setDefaultLang('en');
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

        LocalStorageManager.set<ILanguageOption[]>('languageOptions', this.languageOptions);
      }
    );
  }

  changeLanguage(language: ILanguageOption) {
    this.translateService.use(language.value);
  }
}
