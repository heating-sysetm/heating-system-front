import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from './../../components/loading/loading.module';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',component:SensorsComponent
  },]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SensorRoutingModule { }
  

@NgModule({
  declarations: [SensorsComponent],
  imports: [
    CommonModule,SensorRoutingModule,MaterialModule,
    LoadingModule,
    TranslateModule
  ]
})
export class SensorsModule { }
