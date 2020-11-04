import { ApiService } from './../../services/api.service';
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
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'password'];
  dataSource = [];
  public userForm: FormGroup;
  public loading =false;
  constructor(private notif:NotificationService,
    private _formBuilder: FormBuilder,private api:ApiService) { }


  ngOnInit(): void {
    this.getAllUsers();
    this.userForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password : ["", Validators.required],
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
    if(this.check()){
      console.log(this.userForm.value);
      this.api.addUser(this.userForm.value).subscribe((result)=>{
        if(result['status'] ==200){
          this.notif.createSuccess('خطا', 'کاربر با موفقیت افزوده شد');
        }else
        {
          this.notif.createError('خطا', 'امکان افزودن کاربر وجود ندارد');
        }
      })
    }
  }



  getAllUsers(){
    this.api.getusers().subscribe(result=>{
      let users = result['data'];
      users.forEach(user => {
        let temp={
          id:user.id,
          name:user.name,
          username:user.username,
          password:user.password
        }
        ELEMENT_DATA.push(temp);
        console.log(ELEMENT_DATA);
        this.dataSource=ELEMENT_DATA; 
      });      
    });
  }
}
