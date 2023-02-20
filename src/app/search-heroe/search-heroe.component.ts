import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of, debounceTime, distinctUntilChanged, switchMap, pipe } from 'rxjs';
import { Heroes } from '../marvel';
import { HeroService } from '../hero.service';

@Component({
  selector: 'search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.scss']
})
export class SearchHeroeComponent implements OnInit {

  public heroesFound$: Observable<Heroes[]> = of([]);
  public searchTerm: Subject<string> = new Subject();



  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroesFound$ = this.searchTerm.pipe(
      debounceTime(300),
      // distinctUntilChanged(),

      //completa el observable anterior y devuelve otro observable
      switchMap(term => {
        return this.heroService.getHeroSearch(term);
      })
    );
  }


  public search(value: string) {

    this.searchTerm.next(value);
  }
}


