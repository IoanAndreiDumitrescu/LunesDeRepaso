import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  isSubmitted = false;
  contactForm = new FormGroup({
    nombre: new FormControl(),
    carnetDeConducir: new FormControl(),
    fechaExpedicion: new FormControl()
  });

  onSubmit() {
    this.isSubmitted = true;
  }

  get isFieldsShown() {
    return this.contactForm.get('carnetDeConducir')?.value === 'si';
  }
}
