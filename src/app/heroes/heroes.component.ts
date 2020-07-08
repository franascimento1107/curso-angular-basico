import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Heroes } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes = Heroes;

  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selecionado heroi ${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {this.heroes = heroes});
  }
}
