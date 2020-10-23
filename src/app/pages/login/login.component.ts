import { NotificationService } from './../../services/notification.service';
import { ThemeService } from './../../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userInfo: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  constructor(
    private notif: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/pages/home']);
    }
    this.userInfo = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      autoLogin: false,
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    if (this.check()) {
      return;
    }
    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/pages/home']);
        },
        (error) => {
          this.notif.createError('خطا', 'نام کاربری و یا رمزعبور نادرست می باشد ');
          this.loading = false;
        }
      );
  }

  check() {
    if (this.f.username.invalid) {
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return true;
    } else if (this.f.password.invalid) {
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return true;
    }
    return false;
  }

  get f() {
    return this.userInfo.controls;
  }
}
