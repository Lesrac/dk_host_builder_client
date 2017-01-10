import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {KindredsComponent} from "./kindred/kindreds.component";

import {DarklandsService} from './services/darklands.service';
import {TokenSearchService} from "./services/token-search.service";
import {TokenSearchComponent} from "./token/token-search.component";
import {KindredDetailComponent} from "./kindred/kindred-detail.component";
import {WarriorsComponent} from "./warrior/warriors.component";
import {WarriorDetailComponent} from "./warrior/warrior-detail.component";
import {NumberToArrayPipe} from "./pipes/number-to-array-pipe";
import {ArmourComponent} from "./warrior/equipment/armour.component";
import {CombatWeaponComponent} from "./warrior/equipment/combat-weapon.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        KindredsComponent,
        TokenSearchComponent,
        KindredDetailComponent,
        WarriorsComponent,
        WarriorDetailComponent,
        NumberToArrayPipe,
        ArmourComponent,
        CombatWeaponComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        DarklandsService,
        TokenSearchService
    ]
})
export class AppModule {
}
