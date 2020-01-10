import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorSesionProvider } from '../../providers/proveedor-sesion/proveedor-sesion';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"inicio",segment:"inicio"})
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  nombre_usuario:any;
  codigo:any; 

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public ses:ProveedorSesionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.mostrar_usuario();
  }

  mostrar_usuario(){
     this.nombre_usuario=this.ses.getCampo("nombre","usu");
     this.codigo=this.ses.getCampo("usuario_id","usu");
  }

}
