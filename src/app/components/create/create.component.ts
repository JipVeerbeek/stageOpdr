import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  isVisible = false;
  task: string = '';

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }


  onSubmit() {
    // Access the form data through the 'task' property
    console.log('Task:', this.task);
  }


}
