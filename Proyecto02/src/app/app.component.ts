import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  contactForm = new FormGroup({
    nombre1: new FormControl(),
    nombre2: new FormControl()
  });

  onSubmit() {
    //Convierte los nombres en lowerCase y los  divide en una lista de letras
    let nombre1 = this.contactForm.get("nombre1")?.value.toLowerCase().split('');
    let nombre2 = this.contactForm.get("nombre2")?.value.toLowerCase().split('');

    //Esta array contendrá las letras comunes
    let common_letters: any[] = [];

    // Iterar a través de las letras del nombre
    for (let letter of nombre1) {
      /*Si el segundo nombre incluye la letra y aún no está en 'common_letters'
Luego agréguelo a 'common_letters'*/

      if (nombre2.includes(letter) && !common_letters.includes(letter)) {
        common_letters.push(letter);
      }
    }
    //Actualiza la propiedad del título para mostrar el resultado
    this.title = `Los nombres tienen ${common_letters.length} letras en común: ${common_letters.join(', ')}.`;
  }
}

