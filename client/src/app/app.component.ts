import { Component, ViewChild } from '@angular/core';
import { ChatContainerComponent } from './chat-container/chat-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChatContainerComponent)
  chatComponent: ChatContainerComponent;
}
