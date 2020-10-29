import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  wtemp_one:number;
  wtemp_three:number;
  wtemp_two:number;
  constructor(private dataService:DataShareService) { }

  ngOnInit(): void {
    this.dataService.currentMytext.subscribe(
      (mytext) => {
        this.wtemp_one = mytext;
        this.wtemp_two = mytext;
        this.wtemp_three = mytext;
      }
    );
  }

}
