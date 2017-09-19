import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';


@Component({
  selector: 'config-language',
  templateUrl: 'config-language.html'
})
export class ConfigLanguageComponent {

  constructor(public config: ConfigProvider) {
    console.log('Hello ConfigLanguageComponent Component');
  }

}
