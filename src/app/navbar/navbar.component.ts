import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;

  @Input() title;
  @Input() navItems: { path: string; text: string }[];

  constructor() { }

  ngOnInit(): void {
  }

}
