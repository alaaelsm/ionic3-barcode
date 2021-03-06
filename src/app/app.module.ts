import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataServiceProvider } from '../providers/data-service/data-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    BarcodeScanner,
    Toast,
    DataServiceProvider
  ]
})
export class AppModule {}
