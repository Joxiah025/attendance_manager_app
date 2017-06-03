import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ServicePage } from '../pages/service/service';
import { EventPage } from '../pages/event/event';
import { HomePage } from '../pages/home/home';
import { AttendancePage } from '../pages/attendance/attendance';
import { MemberPage } from '../pages/member/member';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Data } from '../providers/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { SearchPipe } from '../pipes/search/search';

@NgModule({
  declarations: [
    MyApp,
    ServicePage,
    EventPage,
    HomePage,
    AttendancePage,
    MemberPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServicePage,
    EventPage,
    HomePage,
    AttendancePage,
    MemberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
