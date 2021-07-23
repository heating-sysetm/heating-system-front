import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

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
    'name',
    'username',
    'phone',
    'password',
    'isAdmin',
    'delete',
  ];
  dataSource = [];
  
  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
