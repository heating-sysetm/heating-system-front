import { EquipmentsModalComponent } from './../modals/equipments-modal/equipments-modal.component';
import { TypeOfEquipments, SensorTypes } from './data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
export interface Chips {
  key: string;
  value: number;
  equipment?: string;
}

@Component({
  selector: 'app-place-modal-form',
  templateUrl: './place-modal-form.component.html',
  styleUrls: ['./place-modal-form.component.scss']
})
export class PlaceModalFormComponent implements OnInit {


  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Chips[] = [
  ];
  sensors: Chips[] = [];
  fcheck=[];
  scheck=[];

  public sensorForm: FormGroup;
  public equipmentForm: FormGroup;
  public placeForm: FormGroup;
  public sensorTypes: any[] = SensorTypes;
  public equipments: any[] = [{ key: 'دما', value: 10 }, { key: 'فشار', value: 11 },
  { key: 'تشخیص گاز', value: 12 }, { key: 'رطوبت', value: 12 },
  { key: 'وضعیت', value: 13 }, { key: 'سطح مایع', value: 14 },];

  public eqTypes = TypeOfEquipments;


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
      eqName: ['', [Validators.required]],
      eqType: [0, [Validators.required]]
    });
    this.sensorForm = this._formBuilder.group({
      sensorName: ['',[Validators.required]],
      sensorType: [0,[Validators.required]],
      sensorEquipment: [0,[Validators.required]],
    });
  }

  ngOnInit(): void {


  }

  add(): void {
    const value = (this.equipmentForm.controls.eqName.value || '').trim();
    const type = this.equipmentForm.controls.eqType.value;
    // Add our fruit
    if (value && type > 0) {
      this.fruits.push({ key: value, value: type });
      this.fcheck.push(type);
      
    }

    // Clear the input value
    this.equipmentForm.controls['eqName'].reset();
    this.equipmentForm.controls['eqType'].reset();
  }

  remove(fruit: Chips): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  addSensor(): void {
    const value = (this.sensorForm.controls.sensorName.value || '').trim();
    const type = this.sensorForm.controls.sensorType.value;
    let sensorEquipment = this.sensorForm.controls.sensorEquipment.value;
    // Add our fruit
    if (value && type > 0 && sensorEquipment>0) {
      this.sensors.push({ key: value, value: type, equipment: sensorEquipment });
      if (!this.scheck.includes(sensorEquipment)) {
        this.scheck.push(sensorEquipment);
      }
    }

    // Clear the input value
    this.sensorForm.controls['sensorName'].reset();
    this.sensorForm.controls['sensorType'].reset();
    this.sensorForm.controls['sensorEquipment'].reset();
  }

  removeSensor(fruit: Chips): void {
    const index = this.sensors.indexOf(fruit);

    if (index >= 0) {
      this.sensors.splice(index, 1);
    }
  }


}
