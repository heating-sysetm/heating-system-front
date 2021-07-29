import { Component, OnInit } from '@angular/core';

export interface Alert{
  title:string,
  description:string,
  type:string,
  message:string
}
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {
  alerts:Alert[] = [
    {
      title:'هشدار دمای رفت',description:'توضیحات',type:'افزایش دمای رفت',
      message:'دمای رفت بیشتر از مقدار تعیین شده می باشد. دما : ۸۰ درجه سانتی گراد'
    },
    {
      title:'هشدار دمای بویلر',description:'توضیحات',type:'افزایش دمای بویلر',
      message:'دمای بویلر بیشتر از مقدار تعیین شده می باشد. دما : ۸۵ درجه سانتی گراد'
    }
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
