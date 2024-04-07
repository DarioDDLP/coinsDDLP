import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-euros',
  standalone: true,
  imports: [TableModule],
  templateUrl: './euros.component.html',
  styleUrl: './euros.component.scss'
})
export default class EurosComponent {

  products: any = [
    {
      code: '001',
      name: 'name',
      category: 'category',
      quantity: 10,
    },
    {
      code: '001',
      name: 'name',
      category: 'category',
      quantity: 10,
    },
    {
      code: '001',
      name: 'name',
      category: 'category',
      quantity: 10,
    }
  ]

}
