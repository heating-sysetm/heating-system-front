import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {SensorFormModalComponent} from '../../components/modals/sensor-form-modal/sensor-form-modal.component';
import {AlertsModalComponent} from '../../components/modals/alerts-modal/alerts-modal.component';

export interface User {
  name: string;
  username: string;
  password: string;
  id: string;
  phone: string;
  email: string;
  isAdmin: boolean;
}
const ELEMENT_DATA: User[] = [];
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  name="";
  displayedColumns: string[] = [
    'title',
    'importance',
    'basedOn',
    'desc',
    'status',
    'options'
  ];
  dataSource = [{title:'چک دمای بویلر',importance:'زیاد',basedOn:'دما بویلر',desc:'توضیحاتی نیس',status:true}];

  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
  }

  openSensorFormDialog() {
    const dialogRef = this.dialog.open(AlertsModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
