import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const navMenu = document.getElementById('nav-menu') as HTMLElement;
    const navToggleButton = document.getElementById(
      'mobile-nav'
    ) as HTMLButtonElement;

    navToggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('menu-toggle');
    });
  }
}
