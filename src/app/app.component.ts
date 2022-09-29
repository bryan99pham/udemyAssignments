import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isEmpty = true;

  checkEmpty() {
    if(this.username.length > 0)
    {
      this.isEmpty = false;
    }
    else
    {
      this.isEmpty = true;
    }
    return this.isEmpty;
  }

  onReset() {
    this.username = '';
  }
}
