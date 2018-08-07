import { Component } from '@angular/core';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent {
    pageTitle: string = 'Most Grand Slam Titles';
    imageWidth: number = 40;
    showImage: boolean = false;
    listFilter: string = 'federer';
    players: any[] = [
        {
            "playerID": 1,
            "playerName": "Roger Federer",
            "rank": 1,
            "totals": 20,
            "country": "Switzerland",
            "imageUrl": 'http://cdn.tennis.com/uploads/img/2014/06/13/federer/tablet-rankings-players-page.jpg'
        },
        {
            "playerID": 2,
            "playerName": "Rafel Nadal",
            "rank": 2,
            "totals": 17,
            "country": "Spain",
            "imageUrl": 'http://cdn.tennis.com/uploads/img/1201/01/01/rnadal/tablet-rankings-players-page.jpg'

        },
        {
            "playerID": 3,
            "playerName": "Pete Sampras",
            "rank": 3,
            "totals": 14,
            "country": "United States",
            "imageUrl": 'http://sim03.in.com/25/41408a001f8fe381e1debca48295547f_m.jpg'
        },
        {
            "playerID": 4,
            "playerName": "Novac Djokovic",
            "rank": 4,
            "totals": 13,
            "country": "Serbia",
            "imageUrl": 'http://cdn.tennis.com/uploads/img/2014/06/12/djokoviczz/tablet-rankings-players-page.jpg'
        }
    ];
    toggleImage() {
        this.showImage = !this.showImage;
    }
}