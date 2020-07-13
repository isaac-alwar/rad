import { Injectable } from '@angular/core';
import { Game } from './igame';
import { HttpClient } from '@angular/common/http';
import { tap, subscribeOn, map, shareReplay, catchError } from 'rxjs/operators'
import { Observable, combineLatest } from 'rxjs';
import { GamestateService } from './gamestate.service';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamedataurl: string = "api/games";

  game$ = this.http.get<Game>(this.gamedataurl)
  .pipe(
    tap(console.table),
    shareReplay(),
    // catchError(// TODO: custom error),
  );


constructor(private http: HttpClient, gamestate: GamestateService) { 
}

// getGameData(): Observable<IGame[]>{
//   return this.http.get<IGame[]>(this.gamedataurl);
// }

selectedGame$ = combineLatest(this.game$)

  
}
