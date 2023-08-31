import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesServices } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public heroes:Hero[] = [];
  constructor (private heroesService:HeroesServices){}

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
