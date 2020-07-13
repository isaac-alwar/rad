import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './igame';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {
  currentGamePrizeAmount: Game;
  currentGameCountDown: Game;
  

  // Spins Observable
  private gamePrizeAmountSubject$ = new BehaviorSubject<Game>(this.currentGamePrizeAmount);

  gamePrizeAmountChanged$ = this.gamePrizeAmountSubject$.asObservable();

  removeOneSpin(gamePrize: Game) {
    this.currentGamePrizeAmount = gamePrize;
    this.gamePrizeAmountSubject$.next(gamePrize);
  }

  // Countdown Observable
  private gameCountDownSubject$ = new BehaviorSubject<Game>(this.currentGameCountDown);

  gameCountDownChanged$ = this.gameCountDownSubject$.asObservable();

  getCountDown(gameCountdown: Game) {
    this.currentGameCountDown = gameCountdown;
    this.gameCountDownSubject$.next(gameCountdown);

  }

}
