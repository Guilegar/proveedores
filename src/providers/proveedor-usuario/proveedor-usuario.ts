import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ProveedorUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorUsuarioProvider {

  private UrlLogin: string ="http://localhost/miproyecto/login_user.php";
  
  constructor(public http:Http) {
    console.log('Hello ProveedorUsuarioProvider Provider');
  }

  consume_login(usuario:string, password:string){
    return this.http.get(this.UrlLogin,
      { params: { codigo_usuario: usuario, clave_usuario: password } })
   .map(res => res.json());

  }

}
