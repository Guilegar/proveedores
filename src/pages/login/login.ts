import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProveedorUsuarioProvider } from '../../providers/proveedor-usuario/proveedor-usuario';
import { ProveedorSesionProvider } from '../../providers/proveedor-sesion/proveedor-sesion';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"login",segment:"login"})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:any;
  password:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public con:ProveedorUsuarioProvider,
              public alerta:AlertController,
              public ses:ProveedorSesionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validarLogin(){
        this.con.consume_login(this.usuario,this.password)
      .subscribe(resultado => {
        console.log(resultado);
        console.log(resultado.length);
        if (resultado.length > 0) {
           resultado = resultado[0];
           this.ses.set("usu",resultado);
           this.navCtrl.setRoot("inicio");
          
        } else {
          this.mostrarAlerta("Error", "Usuario invalido");
        }
      });
  }

  mostrarAlerta(titulo:string, mensaje:string){
    let alert = this.alerta.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
 
  }

}
