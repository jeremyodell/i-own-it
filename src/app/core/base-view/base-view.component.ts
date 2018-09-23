import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: [ './base-view.component.scss' ]
})
export class BaseViewComponent implements OnInit {

  constructor(public appSettings: AppSettings, public router: Router) {
  }

  ngOnInit() {

  }

}
