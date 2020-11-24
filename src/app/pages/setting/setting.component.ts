import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  times= [
    {value: '1', viewValue: '1 s'},
    {value: '2', viewValue: '2 s'},
    {value: '4', viewValue: '4 s'},
    {value: '10', viewValue: '10 s'},
    {value: '30', viewValue: '30 s'},
    {value: '60', viewValue: '1 m'},
    {value: '120', viewValue: '2 m'},
    {value: '300', viewValue: '5 m'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
