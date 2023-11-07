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
  taskData: any = { task: ''};
  categorieData: any = {categorie: '' };
  data: any;
  originalData: any = {};

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.editTaskForm = this.formBuilder.group({
      task: [''],
      categorie: ['']
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
    
    this.http.get(this.source + 'list/' + this.taskId).subscribe((responseData) => {
      this.taskData = responseData;
      console.log(this.taskData)
      this.originalData = responseData;
      this.editTaskForm.get('task')?.setValue(this.taskData[0].task);
      
      // Set the default value for categorie
      this.editTaskForm.get('categorie')?.setValue(this.taskData[0].categorie);
      console.log(this.editTaskForm.value)
    });
  
    this.http.get(this.source + 'categorie').subscribe((responseData) => {
      this.data = responseData;
    });
  }

  changeSelect(id: any) {
    const newId = id - 1;
    const getCategorieName = this.data[newId].categorie;
    this.editTaskForm.get('categorie')?.setValue(getCategorieName);
  }

  onSubmit() {
    const task = this.editTaskForm.value.task;
    const categorie = this.editTaskForm.value.categorie;
    console.log(categorie)
    if (task === '') return window.alert('Field is empty');

    let data = {
      task,
      categorie: typeof categorie !== 'string' ? categorie : undefined
    }
    console.log(data)
    this.http
      .patch(this.source + 'list/' + this.taskId, data)
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
