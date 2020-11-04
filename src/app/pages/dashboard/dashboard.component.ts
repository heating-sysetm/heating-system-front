import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  changed:number;

  constructor(private dataService:DataShareService) { }

  ngOnInit(): void {
    this.dataService.changes.subscribe(
      (data) => {
        this.changed =data;
      }
    );
  }

}
