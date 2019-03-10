import {NgModule} from '@angular/core';
import {Http, HttpModule} from '@angular/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateUniversalLoader} from './share/utils/translate.universal.loader';

export function createTranslateLoader(http: Http) {
  return new TranslateUniversalLoader('assets/i18n/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class AppTranslationModule {
  constructor(private translate: TranslateService) {
    let browserLanguage: string = navigator.language.toString();
    translate.addLangs(['en']);
    translate.addLangs(['tr']);
    translate.addLangs(['de']);
    if (sessionStorage.getItem('language') == null || sessionStorage.getItem('language') === '') {
      if (browserLanguage.indexOf('tr') > -1) {
        sessionStorage.setItem('language', 'tr');
      } else if (browserLanguage.indexOf('de') > -1) {
        sessionStorage.setItem('language', 'de');
      } else {
        sessionStorage.setItem('language', 'en');
      }
    }
    translate.setDefaultLang('de');
    translate.use(sessionStorage.getItem('language'));
  }
}
