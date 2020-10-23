import { Router } from '@angular/router';
import { ThemeService } from './../../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service.ts';
interface house {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  formGroup: FormGroup;
  allHouses: house[] = [
    { value: '0', viewValue: 'روغنی' },
    { value: '1', viewValue: 'نوری' },
  ];
  selected = this.allHouses[0].value;
  constructor(
    private them: ThemeService,
    formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private api:ApiService,
    private router: Router
  ) {
    this.formGroup = formBuilder.group({
      isChecked: true,
    });
  }

  ngOnInit(): void {}

  toggleTheme() {
    if (this.them.isDarkTheme()) {
      this.them.setLightTheme();
    } else {
      this.them.setDarkTheme();
    }
  }

  logout() {
    console.log('logout');
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
