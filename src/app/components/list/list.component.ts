import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  data: any;
  source: string = "http://localhost:3000/api/"
  isVisible = false;
  task: string = "";
  taskForm: FormGroup;

  // Constructor
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      task: [""]
    });
  }

  // Get request
  ngOnInit() {
    this.http.get(this.source + 'list').subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data)
    }
    );
  }

  // update true or false (done or todo)
  onCheckboxChange(item: any) {

    console.log(item.id + "-" + item.checked)

    this.http.patch(this.source + 'list/' + item.id, { checked: item.checked }).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.error('Error updating checkbox:', error);
    }
    );
  }
 
  // Button show/hide
  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  // Create new task after submit
  onSubmit() {

    const data = this.taskForm.value.task;
    if (data === "") return window.alert("Task is empty");
    this.http.post(this.source + 'list', { task: data}).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.error('Error posting task:', error);
    }
    );
    location.reload();
  }

  // Delete task
  deleteTask(item: any) {
    if (window.confirm('Delete task: ' + item.task)) {
      this.http.delete(this.source + 'list/' + item.id).subscribe((response) => {
        console.log(response)
      },
      (error) => {
        console.error('Error deleting task:', error);
      });
      location.reload()
    }
    
  }

  // Edit a task
  editTask(item: any) {
    this.router.navigate(['edit', item.id]);
  }

}


