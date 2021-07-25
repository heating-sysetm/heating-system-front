import { PlaceModalFormModule } from './../../components/place-modal-form/place-modal-form.module';
import { OptionMenuModule } from './../../components/option-menu/option-menu.module';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',component:PlacesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }



@NgModule({
  declarations: [PlacesComponent],
  imports: [
    CommonModule,PlacesRoutingModule,MaterialModule,
    OptionMenuModule,PlaceModalFormModule
  ]
})
export class PlacesModule { }
