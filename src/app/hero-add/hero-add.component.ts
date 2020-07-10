import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css'],
})
export class HeroAddComponent {
  heroName = '';

  @Output() add = new EventEmitter<string>();

  onAdd() {
    this.add.emit(this.heroName);
    this.heroName = '';
  }
}
