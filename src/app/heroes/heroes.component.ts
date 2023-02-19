import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Heroes } from '../marvel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  
  public heroes2:Heroes[]=[];
  public offset:number=0;
  public total:number=0;
  
  
  
  
  constructor(
    
    private heroService:HeroService,
  ){}
  
  
  
  
  
  
  ngOnInit(): void {

  
  this.heroService.getHeroesList(this.offset).subscribe((res)=>{
    console.log(res);
    this.heroes2=res
    this.total=1562
    });
  
  } 
  
  mas20(){
  
    if(this.offset+20>this.total){
      this.offset=this.total
    }
    else{
      this.offset=this.offset+20;
    }
    
    this.heroService.getHeroesList(this.offset).subscribe((res)=>{
      this.heroes2=res
      console.log(res);});
    
  }
  
  menos20(){
    if(this.offset-20<0){
      this.offset=0
    }
    else{
      this.offset=this.offset-20;
    }
    
    this.heroService.getHeroesList(this.offset).subscribe((res)=>{
      this.heroes2=res
      console.log(res);});
  }
}
