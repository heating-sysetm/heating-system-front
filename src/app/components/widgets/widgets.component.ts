import { Component, OnInit } from '@angular/core';
export interface Chart{
  id:string,
  power:boolean,
  temp:number,
  num:number,
  color:number,
  modal:string
}
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  changed:number;
  list:Chart[]=[
    {
      id:'boyler1',
      power:true,
      temp:23,
      num:1,
      color:4,
      modal:"#modal1"
    }
    ,
    {
      id:'boyler-2',
      power:false,
      temp:44,
      num:2,
      color:9,
      modal:"#modal2"
    },
    {
      id:'boyler-3',
      power:true,
      temp:50,
      num:3,
      color:8,
      modal:"#modal3"
    },
    {
      id:'boyler-4',
      power:true,
      temp:70,
      num:4,
      color:5,
      modal:"#modal4"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
