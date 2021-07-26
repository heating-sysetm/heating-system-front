import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments.component';


import { Routes, RouterModule } from '@angular/router';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',component:EquipmentsComponent
  },]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EquipmentsRoutingModule { }
  


@NgModule({
  declarations: [EquipmentsComponent],
  imports: [
    CommonModule,MaterialModule,
    LoadingModule,
    TranslateModule,EquipmentsRoutingModule
  ]
})
export class EquipmentsModule { }
