import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alerts-modal',
  templateUrl: './alerts-modal.component.html',
  styleUrls: ['./alerts-modal.component.scss']
})

export class AlertsModalComponent implements OnInit {
  AlertForm:FormGroup;
  options: any[] = [{key:'وضعیت',value:1},{key:'مقدار',value:2}];
  ATypes: any[] = [{key:'کم',value:1},{key:'متوسط',value:2},{key:'زیاد',value:2}];
  importanceValue=0;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.AlertForm = this.fb.group({
      title:['',Validators.required],
      desc:['',Validators.required],
      basedOn:[0,Validators.required],
      importance:[0,Validators.required],
      avImportance:[0,Validators.required],
      numberValue:[0,Validators.required],
    });
  }
  onImportanceChange(event){
    this.importanceValue=event.value;
  }
}
