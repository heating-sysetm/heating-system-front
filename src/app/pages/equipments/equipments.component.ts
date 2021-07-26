import { EquipmentsModalComponent } from './../../components/modals/equipments-modal/equipments-modal.component';
import { SensorFormModalComponent } from './../../components/modals/sensor-form-modal/sensor-form-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  name="";
  displayedColumns: string[] = [
    'name',
    'type',
    'numOfSensors',
    'show',
    'options'
  ];
  dataSource = [{name:'دمای رفت' , type:'بویلر',numOfSensors:2,show:true}];

  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
  }
  openEquipmentFormDialog() {
    const dialogRef = this.dialog.open(EquipmentsModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
