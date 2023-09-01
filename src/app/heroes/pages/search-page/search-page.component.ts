import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesServices } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

public searchInput =  new FormControl('');
public heroes: Hero[] = [];
public selectedHero?:Hero;

constructor(private heroesServices:HeroesServices){}

searchHero(){
  const value:string = this.searchInput.value || '';

  this.heroesServices.getSuggestions( value )
    .subscribe(heroes => this.heroes = heroes );
}

onSelectedOption(event: MatAutocompleteSelectedEvent):void{
  if(!event.option.value){
    this.selectedHero = undefined;
    return;
  }

  const hero:Hero = event.option.value;
  this.searchInput.setValue( hero.superhero);

  this.selectedHero = hero;
}

}
