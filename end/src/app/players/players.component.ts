import { Component } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css'],
})
export class PlayersComponent {
    pageTitle: string = 'Most Grand Slam Titles';
    imageWidth: number = 40;
    showImage: boolean = false;
    errorMessage: string;
    // listFilter: string = 'federer';
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredPlayers = this.listFilter ? this.filterPlayers(this.listFilter) : this.players;
    }
    filteredPlayers: Player[];
    players: Player[] = [];
    constructor(private playerService: PlayerService) {
        // this.players = this.playerService.getPlayers();
        this.playerService.getPlayers().subscribe(data => {
            this.players = data;
            this.filteredPlayers = this.players;
        }, error => { this.errorMessage = error });
        
        // this.listFilter = 'R';
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    filterPlayers(filterBy: string): Player[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.players.filter((player: Player) =>
            player.playerName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }
    countryFlagClicked(message: string): void {
        console.log('country code emitted: ' + message);
    }
}