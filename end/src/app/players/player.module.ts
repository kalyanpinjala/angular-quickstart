import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlayersComponent } from "./players.component";
import { PlayerDetailComponent } from "./player-detail.component";
import { PlayerDetailGuard } from "./player-detail.guard";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild([{ path: 'players', component: PlayersComponent },
        { path: 'players/:id', component: PlayerDetailComponent, canActivate: [PlayerDetailGuard] },])
    ],
    declarations: [
        PlayersComponent,
        PlayerDetailComponent
    ]
})
export class PlayerModule {

}