import {Component, Input} from '@angular/core';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  public activePageTitle: string = '';
  public test: string = '-';

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
  @Input() title:String;
  @Input() baCardClass:String;
  @Input() cardType:String;
}
