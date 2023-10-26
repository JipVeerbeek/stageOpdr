import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
  title: string;

  constructor() {
    this.title = "ToDo List";
  }
}
