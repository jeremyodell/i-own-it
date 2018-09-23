import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [ DashboardComponent ],
  exports: [ DashboardComponent ]
})
export class DashboardModule {
}
