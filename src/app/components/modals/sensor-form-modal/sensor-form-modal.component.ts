import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sensor-form-modal',
  templateUrl: './sensor-form-modal.component.html',
  styleUrls: ['./sensor-form-modal.component.scss']
})
export class SensorFormModalComponent implements OnInit {
  sensorForm:FormGroup;
  hosts: any[] = [{key:'boiler 1',value:1}];
  sTypes: any[] = [{key:'دما',value:1},{key:'فشار',value:2},{key:'رطوبت',value:3},{key:'وضعیت',value:4}];
  dashboards:any[]=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sensorForm = this.fb.group({
      sensorName: ['',Validators.required],
      sensorType: [0,Validators.required],
      sensorEquipment: [0,Validators.required],
    });
  }


}
