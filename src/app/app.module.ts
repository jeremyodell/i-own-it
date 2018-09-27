import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { CoreModule } from './core/core.module';

import { DashboardModule } from './views/dashboard/dashboard.module';
import { AppSettings } from './app.settings';
import { BaseViewComponent } from './core/base-view/base-view.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProductComponent } from './views/product/product.component';
import { HistoryComponent } from './views/history/history.component';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './core/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseViewComponent,
    UserMenuComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    CoreModule,
    DashboardModule,
  ],
  providers: [ AppSettings,     {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
