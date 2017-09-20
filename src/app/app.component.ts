import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // menus list ...
    menus = [
      { viewContent: 'Home', routerLinkPath: 'home' },
      { viewContent: 'About', routerLinkPath: 'about' },
      { viewContent: 'Service', routerLinkPath: 'service' },
      { viewContent: 'Contact', routerLinkPath: 'contact' }
    ];

    isOpen;
    toggleNav() {
      return this.isOpen = !this.isOpen;
    }


    ngOnInit() {
    }
}
