import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth';
import { Home } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAIdOLBlVdGEcllbddRzjm4pt-0txIp6LI",
    authDomain: "ionic2-angularfire-8defd.firebaseapp.com",
    databaseURL: "https://ionic2-angularfire-8defd.firebaseio.com",
    projectId: "ionic2-angularfire-8defd",
    storageBucket: "ionic2-angularfire-8defd.appspot.com",
    messagingSenderId: "622273303581"
};

@NgModule({
  declarations: [
    MyApp,
    Home
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar, 
    AuthProvider
  ]
})
export class AppModule {}
