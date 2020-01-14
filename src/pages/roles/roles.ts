import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rol } from '../../models/modelo_rol';

/**
 * Generated class for the RolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"roles",segment:"roles"})
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html',
})
export class RolesPage {

  miRol= {} as Rol;

  anrol: any;
  andesc: any;
  anentrada: any;
  anicono: any;
  elrol: any;
  unaAccion: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
          this.anrol = this.navParams.get("unrol");
          this.unaAccion = this.navParams.get("una_accion");
          this.andesc = this.navParams.get("undesc");
          this.anentrada = this.navParams.get("unent");
          this.anicono = this.navParams.get("unicon");
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad RolesPage');
      if (this.unaAccion == 'ACTUALIZAR') {
        this.llamaunrol();
      }
      else if (this.unaAccion == 'CREAR') {
        this.miRol.rol_id = -1;
        this.miRol.descripcion = '';
        this.miRol.entrada = '';
        this.miRol.icono = '';
      }
  }

  llamaunrol(){
      this.miRol.rol_id = this.anrol;
      this.miRol.descripcion = this.andesc;
      this.miRol.entrada = this.anentrada;
      this.miRol.icono = this.anicono;
  }

}
