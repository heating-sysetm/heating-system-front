import { ThemeService } from './../../theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
interface house {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  formGroup: FormGroup;
  allHouses:house[]= [
    {value: '0', viewValue: 'روغنی'},
    {value: '1', viewValue: 'نوری'}
  ];
  selected = this.allHouses[0].value;
  constructor(private them:ThemeService,formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      isChecked: true
    });
  }

  ngOnInit(): void {
  }

  toggleTheme(){
    console.log("hi there");
    
    if(this.them.isDarkTheme()){
      this.them.setLightTheme()
    }else{
      this.them.setDarkTheme()
    }
  }

}
