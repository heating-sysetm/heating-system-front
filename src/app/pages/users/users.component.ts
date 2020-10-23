import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface User {
  name: string;
  username: string;
  password: string;
  id: string;
}
const ELEMENT_DATA: User[] = [
  {id: '1', name: 'فائزه', username: 'faezeh', password: 'H1213464'},
  {id: '2', name: 'علی', username: 'alinair', password: 'He468768765'}
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'password'];
  dataSource = ELEMENT_DATA;
  public userForm: FormGroup;
  public loading =false;
  constructor(private notif:NotificationService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      name: ["", [Validators.required,Validators.maxLength(16),Validators.minLength(4)]],
      username: ["", [Validators.required,Validators.maxLength(26),Validators.minLength(3)]],
      password : ["", Validators.required,Validators.maxLength(16),Validators.minLength(4)],
    });
  }
  check(){
    if(this.userForm.controls.name.invalid){
      this.notif.createError('خطا', 'نام و نام خانوادگی به درستی وارد نشده است');
      return false;
    }
    else if(this.userForm.controls.password.invalid){
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return false;
    }else if(this.userForm.controls.password.invalid){
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return false;
    }
    return true;
  }
  addUser(){
    if(this.check()){}
  }
}
