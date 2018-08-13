import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const players = [{
            "playerID": 1,
            "playerName": "Roger Federer",
            "rank": 1,
            "totals": 20,
            "country": "Switzerland",
            "countryCode": "ch",
            "imageUrl": "http://cdn.tennis.com/uploads/img/2014/06/13/federer/tablet-rankings-players-page.jpg"
        },
        {
            "playerID": 2,
            "playerName": "Rafel Nadal",
            "rank": 2,
            "totals": 17,
            "country": "Spain",
            "countryCode": "es",
            "imageUrl": "http://cdn.tennis.com/uploads/img/1201/01/01/rnadal/tablet-rankings-players-page.jpg"

        },
        {
            "playerID": 3,
            "playerName": "Pete Sampras",
            "rank": 3,
            "totals": 14,
            "country": "United States",
            "countryCode": "us",
            "imageUrl": "http://sim03.in.com/25/41408a001f8fe381e1debca48295547f_m.jpg"
        },
        {
            "playerID": 4,
            "playerName": "Novac Djokovic",
            "rank": 4,
            "totals": 13,
            "country": "Serbia",
            "countryCode": "rs",
            "imageUrl": "http://cdn.tennis.com/uploads/img/2014/06/12/djokoviczz/tablet-rankings-players-page.jpg"
        }];
        return { players };
    }
}