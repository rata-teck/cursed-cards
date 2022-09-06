import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.component.html',
  styleUrls: ['./mostrar-imagen.component.scss']
})
export class MostrarImagenComponent {
  @Input()
  public imagen: string = '';
  private imagenError: string = 'https://bigseo.com/wp-content/uploads/2018/03/error-404-foxplay.png';
  public cambiarImagenError():void{
    this.imagen = this.imagenError;
  }
}
