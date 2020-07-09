import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Homem-Aranha' },
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Viúva Negra' },
      { id: 5, name: 'Falção' },
      { id: 6, name: 'Capitão América' },
      { id: 7, name: 'Homem de Ferro' },
      { id: 8, name: 'Gavião-Arqueiro' },
      { id: 9, name: 'Homem-Formiga' },
      { id: 10, name: 'Pantera Negra' },
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
