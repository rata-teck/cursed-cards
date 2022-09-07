import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cursed-card',
  templateUrl: './cursed-card.component.html',
  styleUrls: ['./cursed-card.component.scss']
})
export class CursedCardComponent {
  @Input()
  public nombre!: string;
  @Input()
  public descripcion!: string;
  @Input()
  public foto! : string;
  @Output() nombre2 = new EventEmitter<string>();
  @Output() eliminar = new EventEmitter<boolean>();
  Eliminar(boton:boolean){
    this.eliminar.emit(boton);
    this.nombre2.emit(this.nombre);
  }
}
