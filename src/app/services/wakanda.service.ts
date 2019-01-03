import { Injectable } from '@angular/core';
import {WakandaClient} from 'wakanda-client/browser/no-promise';

@Injectable({
  providedIn: 'root'
})
export class WakandaService {

  private _client: WakandaClient;
  private _catalog: any;

  constructor() {
    this._client = new WakandaClient({});
    this._catalog = null;
  }

  getCatalog(): any {
    if (!this._catalog) {
      return this._client.getCatalog().then(c => {
        this._catalog = c;

        return c;
      });
    }

    return Promise.resolve(this._catalog);
  }

  get directory() {
    return this._client.directory;
  }

  get wakandaClientVersion() {
    return this._client.version();
  }
}
