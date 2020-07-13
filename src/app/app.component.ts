import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of, Observable, timer, Scheduler, Subscription } from 'rxjs';
import { GameService } from './game.service';
import { Game } from './igame';
import { GamestateService } from './gamestate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  // countTimer$: Observable<number>;
  @Input() freeSpins: Observable<number>;
  @Input() gameCountDownx =  this.gamedataservice.game$.pipe(tap());

  @Input() displayClaim = true;
   

  public gameData = [];
  // games$: Observable<Game>;
  game$: Observable<Game[]> = this.gamedataservice.game$
  .pipe(tap());


  constructor(private gamedataservice: GameService, private gamestate: GamestateService){ 
  }


  onClaim(){
    this.displayClaim = false;
    // console.log(this.freeSpins);
  }

  claimClicked(){
    this.displayClaim = true;
  }
}
