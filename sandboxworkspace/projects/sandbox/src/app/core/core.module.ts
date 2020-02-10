import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringModule } from './monitoring';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MonitoringModule
  ],
  exports: [MonitoringModule]
})
export class CoreModule { }
