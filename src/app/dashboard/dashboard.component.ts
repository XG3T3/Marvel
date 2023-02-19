import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Heroes } from '../marvel';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public heroes2:Heroes[]=[];

  constructor(
     private heroService: HeroService
   ){}
 
   ngOnInit(): void {
   
 
     // this.heroService.getHeroesa().pipe(map((data:any)=>data.data.results)).subscribe(heroes =>{
     //   this.heroes= heroes;  
     
     this.heroService.getHeroesaDash().subscribe((res)=>{
       this.heroes2=res
       console.log(res);});
     
     
     
   } 
}
