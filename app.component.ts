import { Component } from '@angular/core';
import { Cocktail } from './shared/cocktail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktails';

  cocktail = new Cocktail('Mojito','https://upload.wikimedia.org/wikipedia/commons/0/01/Mojito98775.jpeg','description mojito');
}
