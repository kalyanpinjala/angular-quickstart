import { Injectable } from "@angular/core";
import { Player } from "./player";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, catchError,map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    playerApi: string = 'api/players';
    constructor(private http: HttpClient) {

    }
    getPlayers() : Observable<Player[]> {
        return this.http.get<Player[]>(this.playerApi).pipe(
            tap(data=> console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getPlayer(id: number): Observable<Player | undefined> {
        return this.getPlayers().pipe(
          map((players: Player[]) => players.find(p => p.playerID === id))
        );
      }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}