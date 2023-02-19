import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marvel, Heroes } from './marvel';
import { Observable,map, of } from 'rxjs';
import { HeroesComponent } from './heroes/heroes.component';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl: string = "http://gateway.marvel.com/v1/public/characters";
   
  ts:string="?ts=hero";
  apikey:string="&apikey=19a750aba9802d1d0fa2aeb9746026ed";
  hash:string="&hash=e51a832af2a51bb42689ed660bab8fef";

  permision:string=this.ts+this.apikey+this.hash;

  constructor(
    private http: HttpClient
  ) { }
  


  
  public getHeroesaDash(): Observable<Heroes[]> {

    let limit: number = 12;

    let offset = Math.floor(Math.random() * 1562) - limit;

    console.log('hola');

    return this.http.get<Marvel>(this.heroesUrl + this.permision + "&limit=" + limit + "&offset=" + offset).pipe(map((res:Marvel)=>
    res.data.results));
  }


  public getHeroesList(offset: number): Observable<Heroes[]> {

    let limit: number = 20;

   

    return this.http.get<Marvel>(this.heroesUrl + this.permision + "&limit=" + limit + "&offset=" + offset).pipe(map((res:Marvel)=>
    res.data.results))
  }

  public getHeroesid(id:number): Observable<Heroes[]> {


    return this.http.get<Marvel>(this.heroesUrl +'/'+id+ this.permision).pipe(map((res:Marvel)=>
    res.data.results));
  }


  public getHeroSearch(nombre:String):Observable<Heroes[]>{
    if ((!nombre.trim()) || nombre.length < 3) {
      return of([]);
    }
    return this.http.get<Marvel>(this.heroesUrl +this.permision+'&nameStartsWith='+nombre).pipe(map((res:Marvel)=>
    res.data.results));
  }



}


