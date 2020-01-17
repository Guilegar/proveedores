import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import { Usuario } from '../../models/modelo_usuario';
import { ProveedorUsuarioProvider } from '../../providers/proveedor-usuario/proveedor-usuario';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"usuarios", segment:"usuarios"})
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  miUsuario= {} as Usuario;

  anusuario: any;
  annombre: any;
  anclave: any;
  elusuario: any;
  unaAccion: any

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public user:ProveedorUsuarioProvider,
               public toastCtrl:ToastController,
               public alertCtrl:AlertController) {

                this.anusuario = this.navParams.get("unusuario");
                this.unaAccion = this.navParams.get("una_accion");
                this.annombre = this.navParams.get("unnombre");
                this.anclave = this.navParams.get("unaclave");
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
      if (this.unaAccion == 'ACTUALIZAR') {
        this.llamaunusuario();
      }
      else if (this.unaAccion == 'CREAR') {
        this.miUsuario.usuario_id = -1;
        this.miUsuario.nombre = '';
        this.miUsuario.clave = '';
      }
  }

  llamaunusuario(){
    this.miUsuario.usuario_id = this.anusuario;
    this.miUsuario.nombre = this.annombre;
    this.miUsuario.clave = this.anclave;
   }

   insertarUsuario(){
    //this.datosEquipo.DESCRIPCION.length > 0

      if (this.miUsuario.nombre !== '' &&
           this.miUsuario.clave !== '' 
           ) {
       
           //Aqui puedo realizar la insercion con los
           //datos del la Pagina
           this.user.utilizaCrudUsuario(
           this.miUsuario.usuario_id,
           this.miUsuario.nombre,
           this.miUsuario.clave,
           'insertar').subscribe(res => {
          //Aqui es resultado es cargado a la variable como JSON
           console.log(res);
           console.log(res[0].p_out);

          if (res[0].p_out == "inserto registro") {
              this.mostrarToast('Registro Insertado', 6000);
              this.navCtrl.push('conusuarios');
             //this.cancelarEquipo();
           }
           else {
             this.mostrarToast('Registro  No Insertado', 2000);
            }
   
           }, error => {
              console.log(error);
           });
         }
     else {
            console.log('No Puedo Insertar');
            this.showAlert('Error', 'Faltan Datos');
   }
 }

 mostrarToast(mensaje: string, tiempo?: number) {
  if (!tiempo) {
      tiempo = 1500;
    }
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: tiempo
    });
    toast.present();
 }
 
 showAlert(titulo: string, contenido: string) {
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: contenido,
    buttons: ['OK']
  });
  alert.present();
 }

 cancelarUsuario() {
  this.navCtrl.pop();
 }

  //metodo para actualizar
 actualizarUsuario() {
    //this.datosEquipo.DESCRIPCION.length > 0

    if (this.miUsuario.nombre !== this.annombre ||
        this.miUsuario.clave !== this.anclave 
         ) {

          //Aqui puedo realizar la insercion con los
          //datos del la Pagina
        this.user.utilizaCrudUsuario(
        this.miUsuario.usuario_id,
        this.miUsuario.nombre,
        this.miUsuario.clave,
        'modificar').subscribe(res => {
        //Aqui es resultado es cargado a la variable como JSON

        console.log(res);
        console.log(res[0].p_out);

        if (res[0].p_out == "modifico registro") {
              this.mostrarToast('Registro actualizado', 7000);
              this.navCtrl.push('conusuarios');
            //this.cancelarEquipo();
        }
        else {
            this.mostrarToast('Registro  No actualizo', 2000);
        }
        }, error => {
          console.log(error);
        });
    }
    else {
          console.log('No Puedo actualizar');
          this.showAlert('Error', 'Nada que actualizar');
     }  
   }

   eliminarUsuario() {
    //this.datosEquipo.DESCRIPCION.length > 0
      if (this.miUsuario.usuario_id !== -1 ) {
  
          //Aqui puedo realizar la insercion con los
          //datos del la Pagina
          this.user.utilizaCrudUsuario(
            this.miUsuario.usuario_id,
            this.miUsuario.nombre,
            this.miUsuario.clave,
            'eliminar').subscribe(res => {
            //Aqui es resultado es cargado a la variable como JSON
            console.log(res);
            console.log(res[0].p_out);
            if (res[0].p_out == "elimino registro") {
                 this.mostrarToast('Registro eliminado', 8000);
                 this.navCtrl.push('conusuarios');
                //this.cancelarEquipo();
            }
            else {
                this.mostrarToast('Registro  No eliminó', 2000);
            }
  
            }, error => {
              console.log(error);
            });
      }
      else {
         console.log('No Puedo eliminar');
         this.showAlert('Error', 'Nada que eliminar');
     }
  }

  showmensaje2() {
 
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Seguro de eliminar registro?',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'icon-color',
          handler: () => {
            console.log('Canceló');
  
          }
        },
        {
          text: 'Eliminar',
          cssClass: 'icon-color',
          handler: () => {
            console.log('eliminó');
            this.eliminarUsuario();
          }
        }
      ]
    });
    alert.present();
  }

}
