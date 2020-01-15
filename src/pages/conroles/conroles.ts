import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorUsuarioProvider } from '../../providers/proveedor-usuario/proveedor-usuario';

/**
 * Generated class for the ConrolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"conroles", segment:"conroles"})
@Component({
  selector: 'page-conroles',
  templateUrl: 'conroles.html',
})
export class ConrolesPage {

  unosroles:any;
  test:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public user:ProveedorUsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConrolesPage');
    this.traer_roles();
  }

  traer_roles(){
      this.user.consume_roles().subscribe(resultado => {
        this.unosroles = resultado;
        console.log(this.unosroles);
      }, error => {
        console.log(error);
      });
  }

  creaRol(){
    this.navCtrl.push('roles',
    {
      unrol: -1,
      undesc:'',
      unent:'',
      unicon:'',
      una_accion: 'CREAR',
      callback: this.myCallbackFunction
    });

  }

  vaarol(id:any,desc:any,entrada:any,icono:any){
    this.navCtrl.push('roles',
    {unrol:id,
     undesc:desc,
     unent:entrada,
     unicon:icono,
    una_accion:'ACTUALIZAR'});

  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      this.test = _params;
      resolve();
    });
  }


}
