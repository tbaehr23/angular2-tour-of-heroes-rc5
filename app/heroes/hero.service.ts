import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

    constructor(private http: Http) { }

    private _heroesUrl: string = 'app-mock-webapi/heroes.json'; //relative to index.html

    getHeroes(): Promise<Hero[]>{
        return this.http.get(this._heroesUrl)
                    .map((data: Response) => <Hero[]>data.json())
                    .toPromise()
                    .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }

}