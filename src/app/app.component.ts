import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isOpen = false;
  // menus list ...
  menus = [
    { viewContent: 'Home', routerLinkPath: 'home' },
    { viewContent: 'About', routerLinkPath: 'about' },
    { viewContent: 'Service', routerLinkPath: 'service' },
    { viewContent: 'Contact', routerLinkPath: 'contact' }
  ];
  // ccf
  constructor(private _eref: ElementRef) {}
    openNav() {
      return this.isOpen = true;
    }
    closeNav() {
      return this.isOpen = false;
    }

    @HostListener ('document:click') onOuterClick(event) {
      if (!this._eref.nativeElement.contains(event.target)) {
        return this.isOpen = ! this.isOpen;
      }
    }

    ngOnInit() {
    }
}
