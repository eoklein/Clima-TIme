import { Routes } from "@angular/router";

export const pesquisaRoutes : Routes = [
    {
        path: '',
        loadComponent: () => import('./pesquisa.component').then(r => r.PesquisaComponent)
    }
];
