import {Injectable} from '@angular/core';
import {Producto} from "./producto";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpService) {
  }

  public async agregarProducto(producto: Producto) {
    return await this.http.post("/producto", producto);
  }
  /*
  El formdata debe tener el id del producto
   */
  public async agregarFotosDeProducto(fotos:FormData) {
    return await this.http.formdata("/fotos_producto", fotos);
  }

  public async obtenerProductos() {
    return await this.http.get("/productos");
  }
}
