import { Component } from '@angular/core';
import { Logger } from '../../app/logger.service'
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import { Events } from 'ionic-angular';



@Component({
  templateUrl: 'home.html'
})

/**
 * Contain link with 
 */
export class HomePage {

  private logger:Logger = new Logger(this.constructor.name);



  constructor(public events: Events, public translate: TranslateService, public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController,private geolocation: Geolocation, private httpClient:HttpClient) {
    this.logger.log("instantiating HomePage()");
    menu.enable(true);
    translate.setDefaultLang('fr');
    events.subscribe('toggle:value', (toggleValue) => {
      //console.log('Value: ', toggleValue);
      translate.use(toggleValue);
    });
  }


  openMenu(evt) {
    if(evt === "main"){
       this.menu.enable(true, 'menuParameter');
       this.menu.enable(false, 'menuInformation');
    }else{
       this.menu.enable(true, 'menuInformation');
       this.menu.enable(false, 'menuParameter');
    }
    this.menu.toggle();
}




}
