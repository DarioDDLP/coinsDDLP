import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { coleccionesDario } from './sidebar.config';
export interface SidebarItemsColeccionDario {
  label: string;
  routerLink: string;
  imgUrl: string;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  @Input() visible: boolean = true;
  items: SidebarItemsColeccionDario[] = coleccionesDario;

  closeSidebar(): void {
    this.visible = false;
  }
}
