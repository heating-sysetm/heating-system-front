import { DataShareService } from 'src/app/services/data-share.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heating-Monitoring-System';
  constructor(private dataservice:DataShareService){

  }

  changeData(){
    this.dataservice.changeMytext(5);
  }
}
