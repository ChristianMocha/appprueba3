import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Productos } from '../models/Productos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public producto: Productos;
  public productos: Productos[] = []

  constructor(private dataService: DataService) {

    

    this.producto = {
      nombre: '',
      precio: '',
      descripcion: '',
    };

    this.getProductos();
  }


  onUpload(){
    this.dataService.addProduct(this.producto).then(
      res => {
        console.log("producto agregado");
      }
    );
  }

  getProductos(){
    this.dataService.getProductos().subscribe(
      (res:any) => {
        if (res) {
          console.log(res);
          this.productos= res;
        }
      }
    );
  }

}
