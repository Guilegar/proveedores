import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorUsuarioProvider } from '../../providers/proveedor-usuario/proveedor-usuario';

/**
 * Generated class for the ConusuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"conusuarios", segment:"conusuarios"})
@Component({
  selector: 'page-conusuarios',
  templateUrl: 'conusuarios.html',
})
export class ConusuariosPage {
  unosusuarios:any;
  test:any;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public user:ProveedorUsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConusuariosPage');
    this.traer_usuarios();
  }

  traer_usuarios(){
    this.user.consume_usuarios().subscribe(resultado => {
      this.unosusuarios = resultado;
      console.log(this.unosusuarios);
    }, error => {
      console.log(error);
    });
}

creaUsuario(){
  this.navCtrl.push('usuarios',
  {
    unusuario: -1,
    unnombre:'',
    unaclave:'',
    una_accion: 'CREAR',
    callback: this.myCallbackFunction
  });

}

vaarol(id:any,nom:any,entrada:any){
  this.navCtrl.push('usuarios',
  {unusuario:id,
   unnombre:nom,
   unaclave:entrada,
   una_accion:'ACTUALIZAR'});

}

myCallbackFunction = (_params) => {
  return new Promise((resolve, reject) => {
    this.test = _params;
    resolve();
  });
}

}
