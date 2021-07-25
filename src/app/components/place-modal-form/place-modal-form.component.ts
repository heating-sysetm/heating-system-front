import { TypeOfEquipments, SensorTypes } from './data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-modal-form',
  templateUrl: './place-modal-form.component.html',
  styleUrls: ['./place-modal-form.component.scss']
})
export class PlaceModalFormComponent implements OnInit {

  public sensorForm: FormGroup;
  public equipmentForm: FormGroup;
  public placeForm: FormGroup;
  public sensorTypes:any[]=SensorTypes;
  public equipments:any[]=[{key:'دما',value:10},{key:'فشار',value:11},
  {key:'تشخیص گاز',value:12},{key:'رطوبت',value:12},
  {key:'وضعیت',value:13},{key:'سطح مایع',value:14},] ;

  public eqTypes=TypeOfEquipments;


  public loading = false;
  public ipErr = false;
  public nameErr = false;
  public portErr = false;
  constructor(private _formBuilder: FormBuilder) {
    this.placeForm = this._formBuilder.group({
      placeName: ['', [Validators.required]],
      ipNumber: ['', Validators.required],
      port: ['', Validators.required],
    });
    this.equipmentForm = this._formBuilder.group({
      eqName: ['', Validators.required],
      eqType: [0 , Validators.required]
    });
    this.sensorForm = this._formBuilder.group({
      sensorName: ['', Validators.required],
      sensorType: [0 , Validators.required],
      sensorEquipment : [0 , Validators.required],
    });
  }

  ngOnInit(): void {

    
  }

}
