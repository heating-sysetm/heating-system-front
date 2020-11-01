import { ChartjsAreaComponent } from './components/charts/chartjs-area/chartjs-area.component';
import { SolidGaugeThreeComponent } from './components/charts/solid-gauge-three/solid-gauge-three.component';
import { SolidGaugeTwoComponent } from './components/charts/solid-gauge-two/solid-gauge-two.component';
import { SolidGaugeComponent } from './components/charts/solid-gauge/solid-gauge.component';
import { TempThreeComponent } from './components/widgets/temp-three/temp-three.component';
import { TempTwoComponent } from './components/widgets/temp-two/temp-two.component';
import { TempOneComponent } from './components/widgets/temp-one/temp-one.component';
import { GaugeTempComponent } from './components/charts/gauge-temp/gauge-temp.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS, DateAdapter} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './pages/users/users.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { AreaChartComponent } from './components/charts/area-chart/area-chart.component';
import { ColumnBasicComponent } from './components/charts/column-basic/column-basic.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePickerComponent,PERSIAN_DATE_FORMATS } from './components/date-picker/date-picker.component';
import { ColumnRotatedComponent } from './components/charts/column-rotated/column-rotated.component';
import { LineRotatedComponent } from './components/charts/line-rotated/line-rotated.component';
import { ColumnRotatedTwoComponent } from './components/charts/column-rotated-two/column-rotated-two.component';
import { ColumnRotatedThreeComponent } from './components/charts/column-rotated-three/column-rotated-three.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './services/websocket.service';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

const config: SocketIoConfig = { url: 'http://localhost:8070', options: {
} };
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CalendarComponent,
    ChartsComponent,
    AreaChartComponent,
    ColumnBasicComponent,
    DatePickerComponent,
    ColumnRotatedComponent,
    LineRotatedComponent,
    ColumnRotatedTwoComponent,
    ColumnRotatedThreeComponent,
    DashboardComponent,GaugeTempComponent,TempOneComponent,
    TempTwoComponent,
    TempThreeComponent,    SolidGaugeComponent,
    SolidGaugeTwoComponent,
    SolidGaugeThreeComponent,ChartjsAreaComponent,LineChartComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    SocketIoModule.forRoot(config),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    FormsModule, ReactiveFormsModule,
    // ChartsMod/ule,
    // NgxChartsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers:[WebsocketService,{ provide: DateAdapter, useClass: DatePickerComponent },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: PathLocationStrategy } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
