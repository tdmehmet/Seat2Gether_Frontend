import { TranslateLoader } from 'ng2-translate/ng2-translate';
import { Observable } from 'rxjs/Observable';
import * as en from '../../../assets/i18n/en.json';
import * as de from '../../../assets/i18n/de.json';
import * as tr from '../../../assets/i18n/tr.json';

export class TranslateUniversalLoader implements TranslateLoader {
  constructor(private prefix: string, private suffix: string) {}

  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): Observable< any> {
    return Observable.create(observer => {
      observer.next(lang === 'de' ? de : lang === 'tr' ? tr : en);
      observer.complete();
    });
  }
}
