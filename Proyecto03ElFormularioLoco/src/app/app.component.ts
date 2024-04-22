import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  red: number = 0;
  green: number = 0;
  blue: number = 0;

  get backgroundColor() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  changeRed() {
    this.red = Math.floor(Math.random() * 256);
    this.updateBackgroundColor();
  }

  changeGreen() {
    this.green = Math.floor(Math.random() * 256);
    this.updateBackgroundColor();
  }

  changeBlue() {
    this.blue = Math.floor(Math.random() * 256);
    this.updateBackgroundColor();
  }

  private updateBackgroundColor() {
    document.body.style.backgroundColor = this.backgroundColor;
  }

}

