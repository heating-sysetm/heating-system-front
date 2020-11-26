import { TranslateService } from '@ngx-translate/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ThemeService } from './../../theme/theme.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WebsocketService } from 'src/app/services/websocket.service';
interface house {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  simpleContent = '1';
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;
  formGroup: FormGroup;
  allHouses: house[] = [];
  loading=true;
  selected = '';
  tsel=1;
  times=[
    {value:1,viewValue:'1s'},
    {value:2,viewValue:'2s'},
    {value:5,viewValue:'5s'},
    {value:10,viewValue:'10s'},
    {value:30,viewValue:'30s'},
    {value:1,viewValue:'1m'},
    {value:5,viewValue:'5m'},
    {value:10,viewValue:'10m'},
];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private them: ThemeService,
    formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private api:ApiService,
    private router: Router,public translate: TranslateService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.formGroup = formBuilder.group({
      isChecked: true,
    });
    this.getSelectionData();
    this.loading=false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  toggleTheme() {
    if (this.them.isDarkTheme()) {
      this.them.setLightTheme();
      
    } else {
      this.them.setDarkTheme();
      
    }
  }

  enLang(){
    this.translate.use('en');
  }
  faLang(){
    this.translate.use('fa');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
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

