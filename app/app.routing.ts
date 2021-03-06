import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KindredsComponent} from "./kindred/kindreds.component";
import {TokenSearchComponent} from "./token/token-search.component";
import {KindredDetailComponent} from "./kindred/kindred-detail.component";
import {WarriorDetailComponent} from "./warrior/warrior-detail.component";

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
        path: 'kindred/detail/:id',
        component: KindredDetailComponent
    },
    {
        path: 'kindred/warriors/:id',
        component: WarriorDetailComponent
    },
    {
        path: 'tokensearch',
        component: TokenSearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
