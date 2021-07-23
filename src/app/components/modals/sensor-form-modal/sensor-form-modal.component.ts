import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sensor-form-modal',
  templateUrl: './sensor-form-modal.component.html',
  styleUrls: ['./sensor-form-modal.component.scss']
})
export class SensorFormModalComponent implements OnInit {
  sensorForm:FormGroup;
  hosts: any[] = [{key:'هوشمند',value:1},{key:'دستی',value:0}];
  sTypes: any[] = [{key:'هوشمند',value:1},{key:'دستی',value:0}];
  dashboards:any[]=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sensorForm = this.fb.group({
      sPortNumber:['',Validators.required],
      sDashboardId:[0,Validators.required],
      sensorName:['',Validators.required],
      sType:[0,Validators.required],
    });
  }


}
