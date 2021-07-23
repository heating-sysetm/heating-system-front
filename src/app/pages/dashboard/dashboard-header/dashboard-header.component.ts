import { EquipmentsModalComponent } from '../../../components/modals/equipments-modal/equipments-modal.component';
import { PlaceModalFormComponent } from './../../../components/place-modal-form/place-modal-form.component';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { TranslateService } from '@ngx-translate/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { MatDialog } from '@angular/material/dialog';

interface house {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})

export class DashboardHeaderComponent implements OnInit {
  allHouses: any[] = [{key:'هوشمند',value:1},{key:'دستی',value:0}];
  times=[
    {value:1000,viewValue:'1s'},
    {value:2000,viewValue:'2s'},
    {value:5000,viewValue:'5s'},
    {value:10000,viewValue:'10s'},
    {value:30000,viewValue:'30s'},
    {value:60000,viewValue:'1m'},
];
cStatus=[
  {value:1,viewValue:'دستی'},
  {value:2,viewValue:'خودکار'},
];
selected = 0;
tsel=1000;
scSelect=1;
  constructor(
    private dataService:DataShareService,
    private ws:WebsocketService,
    private api:ApiService,
    public dialog: MatDialog,
    public translate: TranslateService) { 
      
    }

  ngOnInit(): void {
  }

  loadData(){
  }

  getSelectionData(){
    this.allHouses=this.ws.homes;
    this.selected=this.ws.selected_port;
    
  }


  onTimeChange(ob) {
    let selectedTime = ob.value;
    if (selectedTime!=this.ws.selecte_time) {
      this.ws.selecte_time=selectedTime;
      this.ws.sendMessage(selectedTime,true,true);
    }

  }

  onHomeChange(ob) {
    let selectedPort = ob.value;
    if (selectedPort!=this.ws.selected_port) {
      this.ws.selected_port=selectedPort;
      this.ws.close()
      this.ws.runSocket(selectedPort);
    }
    
  }

  openEquipmentsDialog() {
    const dialogRef = this.dialog.open(EquipmentsModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
