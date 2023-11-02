import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateComponent } from './../create/create.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any;
  source: string = "http://localhost:3000/api/"
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.source + 'list').subscribe((responseData) => {
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
 
  @ViewChild('popup') create!: CreateComponent;

  showPopup() {
    this.create.openPopup();
  }

  deleteTask(item: any) {
    if (window.confirm('Delete task: ' + item.task)) {
      this.http.delete(`http://localhost:3000/api/list/` + item.id).subscribe((response) => {
        console.log(response)
      },
      (error) => {
        console.error('Error deleting task:', error);
      });
    }
    
  }

}


