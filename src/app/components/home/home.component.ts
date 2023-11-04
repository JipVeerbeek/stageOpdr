import { Component, ViewChild } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('list') create!: ListComponent;
}
