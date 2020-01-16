import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConusuariosPage } from './conusuarios';

@NgModule({
  declarations: [
    ConusuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConusuariosPage),
  ],
})
export class ConusuariosPageModule {}
