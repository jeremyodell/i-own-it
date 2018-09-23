import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit {
  public form: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [ null ],
      'password': [ null, Validators.compose([ Validators.required, Validators.minLength(6) ]) ]
    });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate([ '/' ]);
    }
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
}
