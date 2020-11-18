import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HumidityChartComponent } from './../../components/charts/humidity-chart/humidity-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartjsAreaComponent } from './../../components/charts/chartjs-area/chartjs-area.component';
import { SolidGaugeThreeComponent } from './../../components/charts/solid-gauge-three/solid-gauge-three.component';
import { SolidGaugeTwoComponent } from './../../components/charts/solid-gauge-two/solid-gauge-two.component';
import { TempThreeComponent } from './../../components/widgets/temp-three/temp-three.component';
import { TempTwoComponent } from './../../components/widgets/temp-two/temp-two.component';
import { TempOneComponent } from './../../components/widgets/temp-one/temp-one.component';
import { LineChartComponent } from './../../components/charts/line-chart/line-chart.component';
import { SolidGaugeComponent } from './../../components/charts/solid-gauge/solid-gauge.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TempOneComponent,
    TempTwoComponent,
    TempThreeComponent,
    SolidGaugeComponent,
    SolidGaugeTwoComponent,
    SolidGaugeThreeComponent,
    ChartjsAreaComponent,
    LineChartComponent,
    HumidityChartComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    TranslateModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
