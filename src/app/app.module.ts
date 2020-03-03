import { UsersPage } from './../pages/users/users';
import { firebaseConfig } from './../config';
import { CompanyPage } from './../pages/company/company';
import { ContactPage } from './../pages/contact/contact';
import { AboutPage } from './../pages/about/about';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import * as firebase from 'firebase';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    CompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    CompanyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
		AuthService
  ]
})
export class AppModule {}
