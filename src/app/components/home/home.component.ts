import { Component, ViewChild } from '@angular/core';
import { CreateComponent } from './../create/create.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('list') create!: ListComponent;
}
