import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add CommonModule and ReactiveFormsModule
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted:', this.feedbackForm.value);
      alert('Thank you for your feedback!');
      this.feedbackForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
