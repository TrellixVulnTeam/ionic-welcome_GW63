import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from '../../node_modules/angularfire2';
import {AngularFireAuthModule} from '../../node_modules/angularfire2/auth';


const FIREBASE_CONFIG = {

    apiKey: "AIzaSyAUgobSFa7qaAWc90wx-UJMFG9qRO6i0zQ",
    authDomain: "ionicapp-a5974.firebaseapp.com",
    databaseURL: "https://ionicapp-a5974.firebaseio.com",
    projectId: "ionicapp-a5974",
    storageBucket: "ionicapp-a5974.appspot.com",
    messagingSenderId: "374660420683"

  };
  
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
