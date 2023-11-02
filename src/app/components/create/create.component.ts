import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  isVisible = false;
  task: string = "";
  taskForm: FormGroup;

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.taskForm = this.formBuilder.group({
      task: [""]
    });
  }

  onSubmit() {
    // console.log('Task:', this.taskForm.value.task);

    const data = this.taskForm.value.task;
    if (data === "") return window.alert("Task is empty");
    this.http.post(`http://localhost:3000/api/list`, { task: data}).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.error('Error posting task:', error);
    }
    );
    // this.taskForm.reset();
    location.reload();
  }



}
