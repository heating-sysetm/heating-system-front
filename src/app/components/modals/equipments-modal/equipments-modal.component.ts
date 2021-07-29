import { Chips } from './../../place-modal-form/place-modal-form.component';
import { SensorTypes, TypeOfEquipments } from './../../place-modal-form/data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipments-modal',
  templateUrl: './equipments-modal.component.html',
  styleUrls: ['./equipments-modal.component.scss']
})
export class EquipmentsModalComponent implements OnInit {
  eqForm:FormGroup;
  sensorForm:FormGroup;
  fruits: Chips[] = [
  ];
  sensors: Chips[] = [];
  fcheck=[];
  scheck=[];
  selectable = true;
  removable = true;
  addOnBlur = true;
  public sensorTypes: any[] = SensorTypes;
  public equipments: any[] = [{ key: 'دما', value: 10 }, { key: 'فشار', value: 11 },
  { key: 'تشخیص گاز', value: 12 }, { key: 'رطوبت', value: 12 },
  { key: 'وضعیت', value: 13 }, { key: 'سطح مایع', value: 14 },];

  public dashboards: any[] = [{ key: 'موتورخاه روغنی', value: 10 }, { key: 'داشبورد ۱', value: 11 },
  { key: 'داشبورد ۲', value: 12 },];

  public eqTypes = TypeOfEquipments;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.eqForm = this.fb.group({
      eqName: ['', []],
      eqDashboard:[0,[]],
      eqType: [0, []]
    });
    this.sensorForm = this.fb.group({
      sensorName: [''],
      sensorType: [0],
      sensorEquipment: [0],
    });
  }


  add(): void {
    const value = (this.eqForm.controls.eqName.value || '').trim();
    const type = this.eqForm.controls.eqType.value;
    // Add our fruit
    if (value && type > 0) {
      this.fruits.push({ key: value, value: type });
      this.fcheck.push(type);
      
    }

    // Clear the input value
    this.eqForm.controls['eqName'].reset();
    this.eqForm.controls['eqType'].reset();
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
