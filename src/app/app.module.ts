import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBNz0tduikFJK1AZ-GgRlvEUezpnF2yjto",
  authDomain: "pgrado-c9d17.firebaseapp.com",
  databaseURL: "https://pgrado-c9d17.firebaseio.com",
  projectId: "pgrado-c9d17",
  storageBucket: "pgrado-c9d17.appspot.com",
  messagingSenderId: "666766718740"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
