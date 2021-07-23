import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipments-modal',
  templateUrl: './equipments-modal.component.html',
  styleUrls: ['./equipments-modal.component.scss']
})
export class EquipmentsModalComponent implements OnInit {
  eqForm:FormGroup;
  sensors: any[] = [{key:'هوشمند',value:1},{key:'دستی',value:0}];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.eqForm = this.fb.group({
      senesorId:[0,Validators.required],
      eqName:['',Validators.required],
    });
  }

}
