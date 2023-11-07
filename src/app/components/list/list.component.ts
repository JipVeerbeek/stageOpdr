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
  categorieen: any;
  source: string = "http://localhost:3000/api/"
  isVisible = false;
  task: string = "";
  categorie: number = 0;
  newTaskForm: FormGroup;
  selectedCategory: number = 0;

  // Constructor
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.newTaskForm = this.formBuilder.group({
      task: [""],
      categorie: [""]
    });
  }

  // Get request
  ngOnInit() {
    this.http.get(this.source + 'list').subscribe((responseData) => {
      this.data = responseData;
      // console.log(this.data)
    }
    );
    this.http.get(this.source + 'categorie').subscribe((responseCategorieen) => {
      this.categorieen = responseCategorieen;
      // console.log(this.categorieen)
    }
    );
  }

  refreshTaskList() {
    let url = this.source + 'list';
    if (this.selectedCategory !== 0) {
      url += `?category=${this.selectedCategory}`;

    }

    this.http.get(url).subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data)
    });
  }
  
  onCatagoryChange() {
    this.refreshTaskList();

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

    const taskData = this.newTaskForm.value.task;
    const categorieData = this.newTaskForm.value.categorie;
    // console.log(taskData + categorieData)
    if (taskData === "" || categorieData === "") return window.alert("Task is empty");
    this.http.post(this.source + 'list', { task: taskData, categorie_id: categorieData}).subscribe((response) => {
      // console.log(response);
      
      this.refreshTaskList();
      this.closePopup();
    },
    (error) => {
      console.error('Error posting task:', error);
    }
    );
  }

  // Delete task
  deleteTask(item: any) {
    if (window.confirm('Delete task: ' + item.task)) {
      this.http.delete(this.source + 'list/' + item.id).subscribe((response) => {
        // console.log(response)
        this.refreshTaskList();
      },
      (error) => {
        console.error('Error deleting task:', error);
      });
    }
    
  }

  // Edit a task
  editTask(item: any) {
    this.router.navigate(['edit', item.id]);
  }

}

