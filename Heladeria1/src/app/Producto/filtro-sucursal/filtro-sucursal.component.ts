import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../Servicie/producto.service';

@Component({
  selector: 'app-filtro-sucursal',
  templateUrl: './filtro-sucursal.component.html',
  styleUrls: ['./filtro-sucursal.component.css']
})
export class FiltroSucursalComponent implements OnInit {

  //productosSucursal: {sucursal: string};
  //sucursal: string
  productosSucursal: any = [];

  constructor(private rutaActiva: ActivatedRoute, private productoServicio: ProductoService) {
    console.log(this.rutaActiva.snapshot.paramMap.get('sucursal'))
   }

  ngOnInit(): void {
    /*this.productosSucursal = {
      sucursal: this.rutaActiva.snapshot.params.sucursal
    };

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.productosSucursal.sucursal = params.sucursal;
      }
    );*/

    /*this.rutaActiva.paramMap.subscribe(
      (params: ParamMap) => {
        this.sucursal = params.get('sucursal');
      
    );
    //this.sucursal = this.rutaActiva.snapshot.paramMap.get("sucursal");
  
      */
        let sucursal = this.rutaActiva.snapshot.paramMap.get('nombre'); 
      this.obtenerProductosFiltro();
    }

    private obtenerProductosFiltro(){
      this.productoServicio.obternerProductosFiltro().subscribe(dato =>{
        this.productosSucursal = dato;
        console.log(dato)
      });
    }
  
  

}
