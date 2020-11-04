import { DataShareService } from 'src/app/services/data-share.service';
import { webSocket } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';

@Injectable()
export class WebsocketService {
  subject = webSocket('ws://192.168.202.199:8070');
  constructor(private datash: DataShareService) {
    this.subject.subscribe((data) => {
      // console.log(data);
      
      if (data['name']=="GasSensor") {
        this.datash.changeGasData(data['data']);
      }else if(data['outTemps']){
        this.datash.changeOutTempData(data['outTemps'][0].data);     
      }else if(data['temps']){
        this.datash.changeCisternData(data['temps'][2][5].data);
        this.datash.changeBoyler1Data(data['temps'][2][4].data);
        this.datash.changeBoyler2Data(data['temps'][2][3].data);
        this.datash.changeBoyler3Data(data['temps'][2][2].data);
        
        this.datash.changeOutputData(data['temps'][0]);
        this.datash.changeInputData(data['temps'][1]);
        this.datash.changeDate(data['temps'][3]);
      }
      this.datash.changeMytext(5);
    });

  }
}
