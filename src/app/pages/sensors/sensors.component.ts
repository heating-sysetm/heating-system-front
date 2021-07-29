import { SensorFormModalComponent } from './../../components/modals/sensor-form-modal/sensor-form-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {
  name="";
  displayedColumns: string[] = [
    'name',
    'type',
    'equipment',
    'show',
    'options'
  ];
  dataSource =new MatTableDataSource( [{name:'دمای رفت' , type:'دما',equipment:'بویلر شماره ۱',show:true}]);

  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSensorFormDialog() {
    const dialogRef = this.dialog.open(SensorFormModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
