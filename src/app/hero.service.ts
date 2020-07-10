import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json' }),
  };

  constructor(
    public messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(() => this.log('Retornou a lista de heróis do backend')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap(() => this.log(`Obteve o herói id=${id} do backend`)),
      catchError(this.handleError<Hero>('getHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) =>
        this.log(`Adicionou herói com id=${newHero.id} do backend`)
      ),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put<Hero>(url, hero, this.httpOptions).pipe(
      tap(() => this.log(`Atualizou o herói id=${hero.id} do backend`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  deleteHero(hero: Hero): Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(() => this.log(`Removido o herói id=${hero.id} do backend`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHero(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.heroesUrl}/?name=${term.trim()}`;

    return this.http.get<Hero[]>(url, this.httpOptions).pipe(
      tap((heroes) =>
        heroes && heroes.length
          ? this.log(`Retornou a lista de heróis semelhantes a "${term}" do backend`)
          : this.log(`Não encontrou herói semelhantes a "${term}" do backend`)
      ),
      catchError(this.handleError<Hero[]>('searchHero', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (!environment.production) {
        console.log(error);
      }

      this.log(`${operation} falhou: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
