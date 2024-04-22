import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  contactForm = new FormGroup({
    nombre: new FormControl(),
  });

  onSubmit() {
    let nombre = this.contactForm.get("nombre")?.value;
    this.title = `${nombre} (${nombre.length})`;
  }
}
