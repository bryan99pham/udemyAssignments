import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white{
      color: white;
    }
  `]
})

export class AppComponent {
  showSecret = false;
  clicks = [];
  count = 0;

  onAddClick() {
    if(this.clicks.length === 0)
    {
      this.clicks.push(1);
    }
    else
    {
      this.clicks.push(this.clicks.at(-1)+1);
    }

  }
}

