import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-euros',
  standalone: true,
  imports: [CommonModule, TableModule, BadgeModule],
  templateUrl: './euros.component.html',
  styleUrl: './euros.component.scss'
})
export default class EurosComponent {

  products: any = [
    {
      pais: 'España',
      year: '1999',
      valor_facial: '1 céntimo',
      ceca: 'A Hamburgo',
      descripcion: 'Catedral de Santiago de Compostela',
      uds: 0,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '2 centimos',
      ceca: 'A Hamburgo',
      descripcion: 'Catedral de Santiago de Compostela',
      uds: 0,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '5 céntimos',
      descripcion: 'Catedral de Santiago de Compostela',
      uds: 0,
    },
    {
      package: 'España',
      year: '1999',
      valor_facial: '10 Céntimos',
      descripcion: 'Cervantes',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '20 Céntimos',
      descripcion: 'Cervantes',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '50 Céntimos',
      descripcion: 'Cervantes',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '1 Euro',
      descripcion: 'Rey Juan Carlos I',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '2 Euros',
      descripcion: 'Rey Juan Carlos I',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '2 Euros C',
      descripcion: 'Rey Juan Carlos I de España',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '1 céntimo',
      ceca: 'A Hamburgo',
      descripcion: 'Catedral de Santiago de Compostela',
      uds: 0,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '2 centimos',
      ceca: 'A Hamburgo',
      descripcion: 'Catedral de Santiago de Compostela',
      uds: 0,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '5 céntimos',
      descripcion: 'Catedral de Santiago de Compostela Catedral de Santiago de Compostela',
      uds: 0,
    },
    {
      package: 'España',
      year: '1999',
      valor_facial: '10 Céntimos',
      descripcion: 'Cervantes',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '20 Céntimos',
      descripcion: 'Cervantes',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '50 Céntimos',
      descripcion: 'Cervantes',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '1 Euro',
      descripcion: 'Rey Juan Carlos I',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '2 Euros',
      descripcion: 'Rey Juan Carlos I',
      uds: 1,
    },
    {
      pais: 'España',
      year: '1999',
      valor_facial: '2 Euros C',
      descripcion: 'Rey Juan Carlos I de España',
      uds: 1,
    }
  ]

}
