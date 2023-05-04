import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',// esto indica que es un metodo global
})
export class HttpService{

  ruta ="http://localhost:51263/api";

  constructor(
    private httpClienete:HttpClient
    ){}

    LeerTodo(cantidad:number , pagina:number , busqueda:string, rutaEspecifica:string){

      let parametros = new HttpParams();

      parametros = parametros.append('cantidad',cantidad);
      parametros = parametros.append('pagina',pagina);
      parametros = parametros.append('busqueda',busqueda);

      return this.httpClienete.get(`${this.ruta}/${rutaEspecifica}`,{params : parametros});
    }

    LeerUno(id: number,rutaEspecifica:string){
      return this.httpClienete.get(`${this.ruta}/${rutaEspecifica}/${id}`);
    }

    Crear(objecto: any,rutaEspecifica:string){
      return this.httpClienete.post(`${this.ruta}/${rutaEspecifica}`,objecto);
    }

    Actualizar(id: number,objecto: any,rutaEspecifica: string){
      return this.httpClienete.put(`${this.ruta}/${rutaEspecifica}/${id}`,objecto);
    }

    Eliminar(ids:number[],rutaEspecifica: string) {

      return this.httpClienete.delete(`${this.ruta}/${rutaEspecifica}`);
    }

}
