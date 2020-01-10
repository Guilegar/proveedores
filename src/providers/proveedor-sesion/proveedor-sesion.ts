
import { Injectable } from '@angular/core';

/*
  Generated class for the ProveedorSesionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorSesionProvider {

  constructor() {
    console.log('Hello ProveedorSesionProvider Provider');
  }

  set (nombreSes:string,datos:any){
    localStorage.setItem(nombreSes, JSON.stringify(datos));
  }

  getCampo(campo:string,nombreSes:string){
      let valor_json = JSON.parse(localStorage.getItem(nombreSes));
      return valor_json[campo];
  }

  destruir(){
    localStorage.clear();
  }

}
