import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorSesionProvider } from '../../providers/proveedor-sesion/proveedor-sesion';
import { ProveedorUsuarioProvider } from '../../providers/proveedor-usuario/proveedor-usuario';

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
  unosperfiles:any;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public ses:ProveedorSesionProvider,
      public user:ProveedorUsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.mostrar_usuario();
  }

  mostrar_usuario(){
     this.nombre_usuario=this.ses.getCampo("nombre","usu");
     this.codigo=this.ses.getCampo("usuario_id","usu");
     this.traer_perfiles();
  }

  traer_perfiles(){
    this.user.consume_perfiles().subscribe(resultado => {
      this.unosperfiles = resultado;
      console.log(this.unosperfiles);
    }, error => {
      console.log(error);
    });

  }

  iraopcion(opcion:string){
      this.navCtrl.push(opcion);
  }

}
