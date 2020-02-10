import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';
import { environment } from '@sandbox-env/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationInsightsModule.forRoot({
      instrumentationKey: environment.appInsights.instrumentationKey
    })
  ],
  providers: [
    AppInsightsService
  ],
  exports: [
    ApplicationInsightsModule
  ]
})
export class MonitoringModule { }
