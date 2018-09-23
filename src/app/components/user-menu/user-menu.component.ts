import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: [ './user-menu.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(): void {
    this.router.navigate([ '/login' ]);
  }
}
