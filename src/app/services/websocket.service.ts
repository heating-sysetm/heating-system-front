import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable()
export class WebsocketService {


  constructor(private socket: Socket) {}

  public sendMessage(message) {
    this.socket.emit('new-message', message);
}

public getMessages = () => {
  
  return Observable.create((observer) => {
          this.socket.on('data', (message) => {
              observer.next(message);
          });
  });
}

}