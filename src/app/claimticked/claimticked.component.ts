import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from '../game.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-claimticked',
  templateUrl: './claimticked.component.html',
  styleUrls: ['./claimticked.component.scss'],
})
export class ClaimtickedComponent {

  game$ = this.gamedataservice.game$
  .pipe(tap());

  @Output() public claimClicked = new EventEmitter<boolean>();


  public gameData = [];
  constructor(private gamedataservice: GameService){ }



  onClick() {
    this.claimClicked.emit();
  }

}
