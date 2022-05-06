import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .navbar {
      justify-content: space-between;
      a {
            margin-right: 0.5rem;
      }
    }
`]
})
export class HeaderComponent {

  constructor() { }
}
