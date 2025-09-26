import { Routes } from "@angular/router";

export const climaRoutes : Routes = [
    {
        path: '',
        loadComponent: () => import('./clima.component').then(r => r.ClimaComponent)
    }
];
