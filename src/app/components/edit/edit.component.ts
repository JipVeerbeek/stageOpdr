import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  editTaskForm: FormGroup;
  taskId!: number | null;
  source: string = 'http://localhost:3000/api/';
  data: any = { task: '' };

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.editTaskForm = this.formBuilder.group({
      task: [''],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id === null) {
        this.taskId = null;
      } else {
        this.taskId = +id;
      }
    });
    this.http
      .get(this.source + 'list/' + this.taskId)
      .subscribe((responseData) => {
        this.data = responseData;
        // console.log(this.data)
        this.editTaskForm.get('task')?.setValue(this.data[0].task);
      });
  }

  onSubmit() {
    const data = this.editTaskForm.value.task;
    if (data === '') return window.alert('Field is empty');
    this.http
      .patch(this.source + 'list/' + this.taskId, { task: data })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error('Error posting task:', error);
        },
      );
    this.router.navigate(['']);
  }

  backButton() {
    this.router.navigate(['']);
  }
}