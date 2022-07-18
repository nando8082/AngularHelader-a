import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../Servicie/producto.service';
import { Sucursal } from '../sucursal';

@Component({
  selector: 'app-filtro-nombre',
  templateUrl: './filtro-nombre.component.html',
  styleUrls: ['./filtro-nombre.component.css']
})
export class FiltroNombreComponent implements OnInit {

  productosNombre: any = [];
  nombre: string = 'Heladeria1'
  
  constructor(private productoServicio: ProductoService) { }

  sucursalNuevo: Sucursal = {
    id: 0,
    ciudad: '',
    correo: '',
    direccion: '', 
    latitud: 0,
    longitud: 0,
    nombre: '',
    telefono: ''
  }

  ngOnInit(): void {
    this.obtenerProductosNombre();
  }

  private obtenerProductosNombre(){
    this.productoServicio.obternerProductosCuenca().subscribe(dato =>{
      this.productosNombre = dato;
      console.log(dato)
    });
  }

}
