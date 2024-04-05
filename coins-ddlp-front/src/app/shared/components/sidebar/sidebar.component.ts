import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { sidebarConfig } from './sidebar.config';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() visible: boolean = true;

  items: any[] = sidebarConfig;

  closeSidebar(): void {
    this.visible = false;
  }

}
