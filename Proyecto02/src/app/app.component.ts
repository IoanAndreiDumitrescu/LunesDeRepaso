

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
    nombre1: new FormControl(),
    nombre2: new FormControl()
  });

  onSubmit() {
    let nombre1 = this.contactForm.get("nombre1")?.value.toLowerCase();
    let nombre2 = this.contactForm.get("nombre2")?.value.toLowerCase();

    let common_letters: any[] = [];
    Array.from(new Set([...nombre1])).forEach(letter => {
      if (nombre2.includes(letter)) {
        common_letters.push(letter);
      }
    });

    this.title = `Los nombres tienen ${common_letters.length} letras en común: ${common_letters}.`;
  }
}
