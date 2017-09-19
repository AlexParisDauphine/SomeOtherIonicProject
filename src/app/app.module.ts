import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenusPage } from '../pages/menus/menus.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IqSelect2Module } from 'ng2-iq-select2';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ConfigProvider } from '../providers/config/config';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
  }

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MenusPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IqSelect2Module,
    IonicModule.forRoot(AppComponent),
    TranslateModule.forRoot({
      loader: {
           provide: TranslateLoader,
           useFactory: (createTranslateLoader),
           deps: [HttpClient]
         }
      }),
      ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    MenusPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider
  ]
})
export class AppModule {}
