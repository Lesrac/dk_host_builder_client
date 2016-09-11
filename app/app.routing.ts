import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KindredsComponent} from "./kindred/kindreds.component";
import {TokenSearchComponent} from "./token/token-search.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/kindreds',
        pathMatch: 'full'
    },
    {
        path: 'kindreds',
        component: KindredsComponent
    },
    {
        path: 'tokensearch',
        component: TokenSearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
