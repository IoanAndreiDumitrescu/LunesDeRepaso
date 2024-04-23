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

  paises: string[] = ['Alemania', 'Italia', 'Francia', 'Luxemburgo', 'Chile', 'Argentina'];
  oldValues: any[] = [];
  imageUrls: string[] = [
    'https://ih1.redbubble.net/image.826700821.3689/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg',
    'https://media.makeameme.org/created/meh-its-ok-c7d6ab0d14.jpg',
    'https://styles.redditmedia.com/t5_5f654i/styles/profileIcon_snoob238d601-0fe9-41d9-8c05-8bbfb4aba0f1-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=8db55350a6bfb00d802711d8fd021ae6793bb78c',
    'https://i.gifer.com/origin/98/9883b75dda993471fb43e7b5d7421af8_w200.gif'
  ];
  contactForm = new FormGroup({
    nombre: new FormControl(),
    carnetDeConducir: new FormControl(),
    fechaExpedicion: new FormControl(),
    dni: new FormControl() 
  });
  onSubmit() {
    let expeditionDate = new Date(this.contactForm.get('fechaExpedicion')?.value);
    let currentDate = new Date();
    if (expeditionDate > currentDate) {
      this.contactForm.setErrors({ 'invalid': true });
      alert("We don't live in the future, add the real date!");
      return;
    }

    let newDni = this.contactForm.get('dni')?.value;
    if (this.oldValues.find(oldValue => oldValue.dni === newDni)) {
      this.contactForm.setErrors({ 'duplicateDni': true });
      alert("The DNI already exists!");
      return;
    }

    let { diffDays, imageUrl } = this.getLicenseDurationAndImage();

    this.oldValues.push({
      ...this.contactForm.value,
      diffDays,
      imageUrl
    });
    this.isSubmitted = true;
    this.contactForm.reset();
  }
  get isFieldsShown() {
    return this.contactForm.get('carnetDeConducir')?.value === 'si';
  }

  getLicenseDurationAndImage() {
    let expeditionDate = new Date(this.contactForm.get('fechaExpedicion')?.value);
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate.getTime() - expeditionDate.getTime());
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let imageUrl = '';

    switch (true) {
      case (diffDays < 100):
        imageUrl = this.imageUrls[0];
        break;
      case (diffDays > 100 && diffDays < 365):
        imageUrl = this.imageUrls[1];
        break;
      case (diffDays > 365 && diffDays < 1000):
        imageUrl = this.imageUrls[2];
        break;
      case (diffDays > 1000):
        imageUrl = this.imageUrls[3];
        break;
      default:
        break;
    }

    return { diffDays, imageUrl };
  }
}
