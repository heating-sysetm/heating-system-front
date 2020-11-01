import { webSocket } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';


@Injectable()
export class WebsocketService {

  subject=webSocket('ws://localhost:8070');
  constructor() {
    this.subject.subscribe(data=>{
      console.log(data);
    });
  }


}