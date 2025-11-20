import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
    private channel = new BroadcastChannel('chat-channel');

  constructor(private zone: NgZone) {}

  send(message: string) {
    this.channel.postMessage(message);
  }

  onMessage(callback: (msg: string) => void) {
    console.log("here");
    
    this.channel.onmessage = (event) => {
      this.zone.run(() => {
        callback(event.data);
      });
    };
  }

}
