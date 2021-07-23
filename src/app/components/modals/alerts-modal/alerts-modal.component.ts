import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alerts-modal',
  templateUrl: './alerts-modal.component.html',
  styleUrls: ['./alerts-modal.component.scss']
})
export class AlertsModalComponent implements OnInit {
  sensorForm:FormGroup;
  hosts: any[] = [{key:'هوشمند',value:1},{key:'دستی',value:0}];
  sTypes: any[] = [{key:'هوشمند',value:1},{key:'دستی',value:0}];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sensorForm = this.fb.group({
      sPortNumber:[0,Validators.required],
      sDashboardId:[0,Validators.required],
      sensorName:['',Validators.required],
      sType:[0,Validators.required],
    });
  }

}
