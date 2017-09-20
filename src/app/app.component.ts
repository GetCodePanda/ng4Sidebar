import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isOpen;
    toggleNav() {
      return this.isOpen = !this.isOpen;
    }

    ngOnInit() {
    }
}
