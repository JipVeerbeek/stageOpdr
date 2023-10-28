import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  data: Observable<any>;

  constructor(private http: HttpClient) {
    this.data = this.http.get("http://localhost:3000/api/list");
  }
}


