import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes = Heroes;

  constructor(public messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: Retornou a lista de heróis`);
    return of(this.heroes);
  }
}
