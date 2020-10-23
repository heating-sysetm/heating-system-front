import { ChartjsAreaComponent } from './../../components/charts/chartjs-area/chartjs-area.component';
import { SolidGaugeThreeComponent } from './../../components/charts/solid-gauge-three/solid-gauge-three.component';
import { SolidGaugeTwoComponent } from './../../components/charts/solid-gauge-two/solid-gauge-two.component';
import { TempThreeComponent } from './../../components/widgets/temp-three/temp-three.component';
import { TempTwoComponent } from './../../components/widgets/temp-two/temp-two.component';
import { TempOneComponent } from './../../components/widgets/temp-one/temp-one.component';
import { LineChartComponent } from './../../components/charts/line-chart/line-chart.component';
import { ColumnBasicComponent } from './../../components/charts/column-basic/column-basic.component';
import { SolidGaugeComponent } from './../../components/charts/solid-gauge/solid-gauge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GaugeTempComponent } from 'src/app/components/charts/gauge-temp/gauge-temp.component';
import { AreaChartComponent } from 'src/app/components/charts/area-chart/area-chart.component';



@NgModule({
  declarations: [DashboardComponent,GaugeTempComponent,    TempOneComponent,
    TempTwoComponent,
    TempThreeComponent,    SolidGaugeComponent,
    SolidGaugeTwoComponent,
    SolidGaugeThreeComponent,ChartjsAreaComponent,LineChartComponent],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
