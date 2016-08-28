import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service'; //relative to hero-search.component
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: 'app/heroes/hero-search.component.html', //relative to index.html
  styleUrls:  ['app/heroes/hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  // Push a search term into the observable stream.
  search(term: string) { this.searchTerms.next(term); }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(searchTerm => searchTerm   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(searchTerm)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
