import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from '../game.service';
import { Observable, timer, Subject, pipe, combineLatest } from 'rxjs';
import { map, take, takeWhile, tap, mapTo } from 'rxjs/operators';
import { Game } from '../igame';
import { GamestateService } from '../gamestate.service';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss'],
})

export class ClaimComponent  {

  game$: Observable<Game[]> = this.gamedataservice.game$
  .pipe(tap());


  @Input() gameCountDown = 35; //this.gamestateservice.currentGameCountDown.countdown (TODO: Ansynchronously get countdown time from gamestate service Observable)
  

  countTimer$: Observable<number>;


  @Output() claimEvent = new EventEmitter<number>();


  @Input() displayClaim: boolean;
  @Input() displayCounter = this.countTimer$ = timer(0,1000).pipe(
    take(this.gameCountDown),
    takeWhile(val => this.gameCountDown > 0 ),
    map(() => --this.gameCountDown)
  );
  

  public gameData = [];
  constructor(private gamedataservice: GameService, private gamestateservice: GamestateService) {

  }

  onClick() {
    this.claimEvent.emit();
  }

}
