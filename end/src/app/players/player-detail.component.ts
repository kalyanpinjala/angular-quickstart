import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from "./player";
import { PlayerService } from "./player.service";

@Component({
    templateUrl: './player-detail.component.html',
    styleUrls:['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit{
    pageTitle: string = 'Player Detail';
    player: Player;
    errorMessage : string;

    constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService) {
        
    }
    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            this.getPlayer(+id);
        }
    }
    getPlayer(id: number) {
        this.playerService.getPlayer(id).subscribe(
          player => this.player = player,
          error => this.errorMessage = <any>error);
      }
    onBack() {
        this.router.navigate(['/players']);
    }
}