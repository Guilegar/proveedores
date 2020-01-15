import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProveedorSesionProvider } from '../proveedor-sesion/proveedor-sesion';


/*
  Generated class for the ProveedorUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorUsuarioProvider {

  private UrlLogin: string ="http://localhost/miproyecto/login_user.php";
  private UrlPerfiles:string ="http://localhost/miproyecto/perfiles_user.php";
  private UrlRoles: string = "http://localhost/miproyecto/consulta_roles.php";
  private UrlCrudRoles: string="http://localhost/miproyecto/crud_roles.php";

  constructor(public http:Http,
              public ses:ProveedorSesionProvider) {
    console.log('Hello ProveedorUsuarioProvider Provider');
  }

  consume_login(usuario:string, password:string){
    return this.http.get(this.UrlLogin,
      { params: { codigo_usuario: usuario, clave_usuario: password } })
   .map(res => res.json());

  }

  consume_perfiles(){
    let usuario:any = this.ses.getCampo("usuario_id","usu");
    return this.http.get(this.UrlPerfiles,
      { params: { codigo_usuario: usuario} })
   .map(res => res.json());
  }

  consume_roles(){
    return this.http.get(this.UrlRoles)
    .map(res => res.json());
  }

  utilizaCrudRol(
        unCodigo_rol: any,
        unaDesc_rol: any,
        unaEntrada_rol: any,
        unIcono_rol: any,
        unaOperacion: any) {
      
        return this.http.get(this.UrlCrudRoles,
          {
            params: {
              codigo_rol: unCodigo_rol,
              desc_rol: unaDesc_rol,
              entrada_rol: unaEntrada_rol,
              icono_rol: unIcono_rol,
              accion: unaOperacion
      
            }
          })
          .map(res => res.json());
  }
 


}
