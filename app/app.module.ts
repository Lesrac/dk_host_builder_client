import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {routing} from './app.routing';
import './rxjs-extensions';

import {AppComponent} from './app.component';
import {KindredsComponent} from "./kindred/kindreds.component";

import {DarklandsService} from './services/darklands.service';
import {TokenSearchService} from "./services/token-search.service";
import {TokenSearchComponent} from "./token/token-search.component";
import {KindredDetailComponent} from "./kindred/kindred-detail.component";
import {WarriorsComponent} from "./warrior/warriors.component";
import {WarriorDetailComponent} from "./warrior/warrior-detail.component";
import {NumberToArrayPipe} from "./pipes/number-to-array-pipe";

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
        NumberToArrayPipe
    ],
    bootstrap: [AppComponent],
    providers: [
        DarklandsService,
        TokenSearchService
    ]
})
export class AppModule {
}
