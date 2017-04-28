import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { PushNotificationsModule } from 'angular2-notifications';
import { SocketService } from './socket.service';

import { AppComponent } from './app.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatColumnComponent } from './chat-column/chat-column.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    ChatColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    PushNotificationsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
