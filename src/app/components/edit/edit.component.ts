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

  onSubmit() {
    let task = this.editTaskForm.value.task;
    let categorie = this.editTaskForm.value.categorie;
    const originalCategorie = this.taskData[0].categorie; 
    const originalTask = this.taskData[0].task; 
    // console.log(originalCategorie + categorie)
    if (task === '') {
      window.alert('Field is empty');
      return;
    }
    if (task === originalTask) {
      task = originalTask;
      
    }
    else if(categorie === originalCategorie) {
      categorie = 'string'
    }
    let data = {
      task,
      categorie: categorie === 'string' ? undefined : categorie,
    };
  
    // console.log(data);
  
    this.http
      .patch(this.source + 'list/' + this.taskId, data)
      .subscribe(
        (response) => {
          // console.log(response);
        },
        (error) => {
          console.error('Error posting task:', error);
        }
      );
  
    this.router.navigate(['']);
  }

  backButton() {
    this.router.navigate(['']);
  }
}
