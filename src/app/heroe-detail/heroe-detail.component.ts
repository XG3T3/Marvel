import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Heroes } from '../marvel';

@Component({
  selector: 'heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent implements OnInit{

  public heroe: Heroes;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ){  }

  ngOnInit(): void {

    // wiki truko + hace parseInt
    const id: number = +this.route.snapshot.paramMap.get('id');
     this.heroService.getHeroesid(id)
     .subscribe(hero =>{
      this.heroe= hero[0];
    });
  }

  atras(): void{
    this.location.back();
}


}
