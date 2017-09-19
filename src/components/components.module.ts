import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigLanguageComponent } from './config-language/config-language';

@NgModule({
	declarations: [ConfigLanguageComponent,
	],
	imports: [
		IonicPageModule.forChild(ConfigLanguageComponent)
	],
	exports: [
		ConfigLanguageComponent
	]
})
export class ComponentsModule { }
