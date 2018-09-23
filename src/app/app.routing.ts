import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BaseViewComponent } from './core/base-view/base-view.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProductComponent } from './views/product/product.component';
import { HistoryComponent } from './views/history/history.component';

export const routes: Routes = [
  {
    path: '', component: BaseViewComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'history/:id', component: HistoryComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
});
