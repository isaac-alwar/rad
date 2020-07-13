import { Timestamp } from 'rxjs';
import { DatePipe } from '@angular/common';

export interface Game {
    gameId: string | number,
    gameName: string,
    gamePrize: string | string[],
    prizeAmount: number | number[],
    countdown: number 
}
