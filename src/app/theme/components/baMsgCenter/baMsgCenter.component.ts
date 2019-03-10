import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter implements AfterViewInit{

  public notifications: Array<Object>;
  public messages: Array<Object>;
  personnelName: string;

  constructor(private _baMsgCenterService: BaMsgCenterService)  {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

  ngAfterViewInit() {
    this.personnelName = sessionStorage.getItem('username');
  }
}
