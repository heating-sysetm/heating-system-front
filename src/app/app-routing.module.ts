import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ChartjsAreaComponent } from './components/charts/chartjs-area/chartjs-area.component';
import { SolidGaugeThreeComponent } from './components/charts/solid-gauge-three/solid-gauge-three.component';
import { GaugeTempComponent } from './components/charts/gauge-temp/gauge-temp.component';
import { SolidGaugeComponent } from './components/charts/solid-gauge/solid-gauge.component';
import { ColumnBasicComponent } from './components/charts/column-basic/column-basic.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { ClockComponent } from './components/charts/clock/clock.component';
import { AreaChartComponent } from './components/charts/area-chart/area-chart.component';
import { charts } from 'highcharts';
import { ChartsComponent } from './pages/charts/charts.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path: 'pages',
    component: SidebarComponent,
    children: [
      {
        path: 'home',
        component:DashboardComponent
       },
       {
        path: 'users',
        component:UsersComponent
       },
       {
        path: 'calendar',
        component:CalendarComponent
       },
       {
        path: 'charts',
        component:ChartsComponent
       },
       
    ]  
  },
  {
    path:'test',component:ColumnBasicComponent
  }
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SidebarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
