import { Component, Input, OnInit } from '@angular/core';

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
}
