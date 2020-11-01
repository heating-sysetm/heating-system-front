import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ThemeService } from './../../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WebsocketService } from 'src/app/services/websocket.service';
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
  allHouses: house[] = [];
  loading=true;
  selected = '';
  constructor(
    private them: ThemeService,
    formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private api:ApiService,
    private router: Router,private so:WebsocketService
  ) {
    this.formGroup = formBuilder.group({
      isChecked: true,
    });
  }

  ngOnInit(): void {
    this.getSelectionData();
    this.loading=false;
    // this.so.getMessages().subscribe((message: string) => {
    //   console.log(message);
      
    // });
  }

  toggleTheme() {
    if (this.them.isDarkTheme()) {
      this.them.setLightTheme();
    } else {
      this.them.setDarkTheme();
    }
  }

  logout() {
    console.log('logout');
    // this.authenticationService.logout();
    // this.router.navigate(['/']);
  }
  getSelectionData(){
    this.api.getHomes().subscribe(data=>{
      console.log();
      data['data'].forEach(home => {
        let temp={
          value:home.url,viewValue:home.name
        }
        this.allHouses.push(temp);
      });
      this.selected = this.allHouses[0].value;
    },error=>{
      console.log(error);
    });
  }
}
