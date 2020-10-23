import { NotificationService } from './../../services/notification.service';
import { ThemeService } from './../../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userInfo: FormGroup;
  public loading =false;

  constructor(private notif:NotificationService,
    private _formBuilder: FormBuilder) {
      this.userInfo = this._formBuilder.group({
        username: ["", [Validators.required,Validators.maxLength(16),Validators.minLength(4)]],
        password : ["", Validators.required,Validators.maxLength(16),Validators.minLength(4)],
        autoLogin: false
      });
    }
  
  ngOnInit() {
  }

  login(){
    if(this.check()){
      this.loading=true;
    }
  }

  check(){
    if(this.userInfo.controls.username.invalid){
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return false;
    }
    else if(this.userInfo.controls.password.invalid){
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return false;
    }
    return true;
  }


  // Change theme


}
