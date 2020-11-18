import { TranslateService } from '@ngx-translate/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  changed:number;
  loading=true;
  constructor(private dataService:DataShareService,public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.dataService.changes.subscribe(
      (data) => {
        this.changed =data;
        this.loading=false;
      }
    );
  }

}
