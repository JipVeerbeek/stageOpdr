import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch the data when the component initializes
    this.http.get('http://localhost:3000/api/list').subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data)
    }
    );
  }

  onCheckboxChange(item: any) {

    console.log(item.id + "-" + item.checked)

    this.http.patch(`http://localhost:3000/api/list/` + item.id, { checked: item.checked }).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.error('Error updating checkbox:', error);
    }
    );
  }



}


