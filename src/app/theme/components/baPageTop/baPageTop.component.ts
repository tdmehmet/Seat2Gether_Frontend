import { Component } from '@angular/core';
import {Router, Routes} from '@angular/router';
import { GlobalState } from '../../../global.state';
import { GlobalVariables } from '../../../share/utils/global.variables';
import { User } from '../../../models/login/user-model';
import { UserService } from '../../../share/services/user/user.service';
import { FileService } from '../../../share/services/file/file.service';
import 'style-loader!./baPageTop.scss';
import {TranslateService} from "@ngx-translate/core";
import {LangChangeEvent} from "ng2-translate";
import {MenuService} from "../../../share/services/menu/menu.service";
import {BaMenuService} from "../../services/baMenu/baMenu.service";
import {AppTranslationModule} from "../../../app.translation.module";
@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})

export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  user: User = new User();
  userImagePath: string = 'assets/img/users/no-photo.png';

  constructor(private _state: GlobalState,
              private router: Router,
              private userService: UserService,
              private fileService: FileService,
              private translate: TranslateService,
              private menuService: MenuService,
              private _menuService: BaMenuService) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed ;
    });

    this.userService.getUserInfo(sessionStorage.getItem('username')).subscribe(
      p => {
        this.user.userName =  p.userName;
        this.user.activated = p.activated;
        this.user.personnelName = p.personnelName;
        this.user.personnelSurname = p.personnelSurname;
        this.user.dateCreated = p.dateCreated;
        this.userImagePath = 'assets/img/users/' + p.userName + '.png';

        let fileExists: boolean = false;
        this.fileService.fileExists(this.userImagePath).then(
          (data) => {
            if (!data)
              this.userImagePath =   'assets/img/users/no-photo.png';
          },
          (err) => {
            this.userImagePath =   'assets/img/users/no-photo.png';
          }
        );
      },
      (err) => {

      }

    );
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/logout']);
  }


  public getUserName(): string {
    return this.user.personnelName + ' ' + this.user.personnelSurname;
  }

  public changeLang(lang: string) {
    sessionStorage.setItem('language', lang);
  }
}
