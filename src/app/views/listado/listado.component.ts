import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Pizza casera',
        ingredientes: `1 kilogramo de harina de fuerza (también conocida como harina 00)
        1 cucharadita de sal fina
        2½ tazas de agua tibia
        2 cucharadas soperas de aceite de oliva
        30 gramos de levadura fresca`,
        preparacion: `Mezclar en un bowl y amasar. Dejar reposar por 1 hora. Luego colocar la salsa y muzzarella y llevar al horno`
      },
      {
        titulo: 'Helado de Frutillas',
        ingredientes: `500 ml de nata para montar
        100 g de azúcar glas
        370 g de leche condensada
        1 Kg de frutillas`,
        preparacion: 'Cortar las frutillas en trocitos, mezclar todo y poner a congelar.'
      },
      {
        titulo: 'Ravioles con tuco',
        ingredientes: `1 litro de agua hirviendo
        1/2 Kilo de Ravioles
        Tuco a gusto
        Queso rallado a gusto`,
        preparacion: 'En el agua hirviendo agregar los ravioles y dejarlos hervir hasta que esten prontos.Colar y ponerles tuco y queso a gusto'
      }

    ]
   }

  ngOnInit(): void {
  }

}
