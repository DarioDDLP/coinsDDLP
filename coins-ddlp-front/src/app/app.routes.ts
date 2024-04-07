import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home/euros', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: 'euros',
                title: 'euros', loadComponent: () => import('./home/euros/euros.component')
            },
            {
                path: 'conmemorativas',
                title: 'conmemorativas', loadComponent: () => import('./home/conmemorativas/conmemorativas.component')
            },
            {
                path: 'pesetas',
                title: 'pesetas', loadComponent: () => import('./home/pesetas/pesetas.component')
            },
            {
                path: 'ubicacion',
                title: 'ubicación', loadComponent: () => import('./home/ubicacion/ubicacion.component')
            },
            {
                path: 'estadisticas',
                title: 'estadisticas', loadComponent: () => import('./home/estadisticas/estadisticas.component')
            }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
