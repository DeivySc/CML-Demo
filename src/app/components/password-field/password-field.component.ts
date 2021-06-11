import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit {

  buttons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  name = '';

   pressKey(key: number) {
    if (this.name.length === 6) {
      return;
    }
    this.name += key;
  }

  delete() {
    this.name = '';
  }

  clear() {
    if (this.name.length > 0) {
      const length = this.name.length;
      this.name = this.name.substring(0, length - 1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
