import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-websocket',
  imports: [CommonModule,FormsModule],
  templateUrl: './websocket.html',
  styleUrl: './websocket.css',
})
export class Websocket implements OnInit{
  message = "";
  messages: string[] = [];

  constructor(private sync: WebsocketService) {}

   ngOnInit() {
    this.sync.onMessage((msg) => {
      console.log("Received in component:", msg);
      console.log("Current list:", this.messages);
      this.messages.push(msg);
    });
  }

  send() {
    if (this.message.trim()) {
      console.log("Sending:", this.message);
      this.sync.send(this.message);
      this.message = ''; 
    }
  }
}
