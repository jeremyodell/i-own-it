import { UserService } from './../../core/services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: [ './user-menu.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  login(): void {
    this.router.navigate([ '/login' ]);
  }

  logout(): void {
    this.userService.logout();
  }

  check(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }
}
