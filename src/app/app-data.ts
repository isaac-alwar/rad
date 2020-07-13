import { InMemoryDbService } from 'angular-in-memory-web-api';

import { GameData } from '../app/game-data';

export class AppData implements InMemoryDbService {

  createDb() {
    const games = GameData.games;
    return { games };
  }
}