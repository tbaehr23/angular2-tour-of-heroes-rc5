import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

    constructor(private http: Http) { }

    private _heroesUrl = 'app/heroes';  // URL to web api

    getHeroes(): Promise<Hero[]>{
        return this.http.get(this._heroesUrl)
                   .toPromise()
                   .then(response => response.json().data as Hero[])
                   .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    save(hero: Hero): Promise<Hero>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    delete(hero: Hero): Promise<Response> {
        
        let headers = new Headers({
            'Content-Type': 'application/json'});

        let url = `${this._heroesUrl}/${hero.id}`;

        return this.http.delete(url, {headers: headers})
                    .toPromise()
                    .catch(this.handleError);
    }


    // Add new Hero
    private post(hero: Hero): Promise<Hero> {
        
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http.post(this._heroesUrl, JSON.stringify(hero), {headers: headers})
                    .toPromise()
                    .then(response => response.json().data)
                    .catch(this.handleError);
    }

    // Update existing Hero
    private put(hero: Hero): Promise<Hero> {
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this._heroesUrl}/${hero.id}`;

        return this.http.put(url, JSON.stringify(hero), {headers: headers})
                    .toPromise()
                    .then(() => hero)
                    .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
