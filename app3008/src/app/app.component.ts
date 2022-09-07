import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HistoriaImagen } from './modelos/historia-imagen';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<HistoriaImagen> = [];
  public nuevoHistorial: HistoriaImagen = {
    nombre: '',
    detalle: '',
    imagen: ''
  }
  public imagen: string = this.nuevoHistorial.imagen;

  public cambiarNombre(event: Event): void{
    this.nuevoHistorial.nombre = (event.target as HTMLInputElement).value;
  }
  public cambiarDetalle(event: Event): void{
    this.nuevoHistorial.detalle = (event.target as HTMLInputElement).value;
  }
  public cambiarImagen(event: Event): void{
    this.nuevoHistorial.imagen = (event.target as HTMLInputElement).value;
  }
  public guardarHistorial(): void{
    const copia: HistoriaImagen = {
      ...this.nuevoHistorial
    }
    copia.id = this.elementosGuardados.length + 1;
    this.elementosGuardados.push(copia);
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.detalle = '';
    this.nuevoHistorial.imagen = '';
  }
  public eliminarCarta(boton:boolean, nombre:string): void{
    if(boton){
      const objeto = this.elementosGuardados.filter((nombre) => nombre);
      const pos = this.elementosGuardados.indexOf(objeto[0]);
      this.elementosGuardados.splice(pos, 1);
    }
  }
}
