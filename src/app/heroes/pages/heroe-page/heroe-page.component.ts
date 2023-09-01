import { Component, OnInit } from '@angular/core';
import { HeroesServices } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styleUrls: ['./heroe-page.component.css']
})
export class HeroePageComponent implements OnInit{

  public hero?: Hero;
  constructor(
    private activatedRoute:ActivatedRoute,
    private heroesServices:HeroesServices,
    private router:Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})  => this.heroesServices.getHeroById(id)),
      ).subscribe( hero => {

        if(!hero) return this.router.navigate(['/heroes/list']);

        this.hero = hero;
        return;
      });
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }
}
