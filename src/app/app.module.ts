import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationComponent } from './notification/notification.component';
import { messaging } from '../configs/firebase.config';

@NgModule({
  declarations: [],
  imports: [BrowserModule, NotificationComponent],
  providers: [{ provide: 'messaging', useValue: messaging }],
  bootstrap: [],
})
export class AppModule {}
