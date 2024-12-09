import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { messaging } from '../../configs/firebase.config';
import { environment } from '../../environments/environment';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [JsonPipe],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  messages: Array<any> = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    messaging
      .getToken({ vapidKey: environment.firebaseConfig.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  listen() {
    messaging.onMessage((incomingMessage) => {
      this.messages.push(incomingMessage);
      this.cd.detectChanges();
    });
  }
}
