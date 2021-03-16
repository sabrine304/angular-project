import { readFileSync } from 'fs';
import { resolve } from 'path';

export class CriteriaService {
  private _data: any;

  constructor(
    dataPath: string,
  ) {
    this._data = this._readData(dataPath);
  }

  public async process(criteriaPath: string): Promise<any[]> {
    return [];
  }

  /** We use this function which may do an API or DB (async) call to get the genre, simulated by the _sleep call */
  public async getGenre(index: number): Promise<string> {
    await this._sleep(); // Do not remove

    return this._data.games[index].genre;
  }

  /** We use this function which may do an API or DB (async) call to get the year, simulated by the _sleep call */
  public async getYear(index: number): Promise<string> {
    await this._sleep(); // Do not remove

    return this._data.games[index].year;
  }

  /** We use this function which may do an API or DB (async) call to get the platform list, simulated by the _sleep call */
  public async getPlatforms(index: number): Promise<string[]> {
    await this._sleep(); // Do not remove

    return this._data.games[index].platforms;
  }

  /** We use this function which may do an API or DB (async) call to know if the game has an expansion, simulated by the _sleep call */
  public async hasExpansion(index: number): Promise<boolean> {
    await this._sleep(); // Do not remove

    return this._data.games[index].hasExpansion;
  }

  /** Don't update this method */
  private async _sleep(maxSec: number = 5): Promise<void> {
    return new Promise(res => setTimeout(res, (Math.floor(Math.random() * maxSec) + 1) * 100));
  }

  /** Don't update this method */
  private _readData(path: string): any {
    return JSON.parse(readFileSync(resolve(__dirname, path), 'utf-8'));
  }
}
