import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.updateHero(this.hero).subscribe(() => (this.goBack()));
  }

  goBack() {
    this.location.back();
  }
}
