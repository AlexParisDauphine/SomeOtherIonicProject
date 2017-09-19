import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  options = {
    isToggled: new FormControl(true),
    linguaFranca: new FormControl('Bonjour')
  }

  constructor() {
    console.log('Hello ConfigProvider Provider');

    this.options.isToggled.valueChanges.subscribe((truthy: boolean) => {
      this.options.linguaFranca.setValue(truthy ? 'Bonjour' : 'Hello');
    });
  }

}
