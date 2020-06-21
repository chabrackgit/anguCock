import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('Mojito','https://upload.wikimedia.org/wikipedia/commons/0/01/Mojito98775.jpeg','description mojito'),
    new Cocktail('Margarita','https://www.liquor.com/thmb/HzYcHscHlBK0Dj5M6eJOb5M9YjQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__23134943__Margarita-720x720-recipe-v2-6dc3213825c94a9cb6d7ce1818ce6e31.jpg','description margarita'),
    new Cocktail('Vodka','https://img-3.journaldesfemmes.fr/-2pVyRiXi0kOcmWV4H1S3f4YuPA=/750x/smart/7d3192f0960c4bab837052031e65e7de/recipe-jdf/10027092.jpg','description vodka')  

  ]

  public cocktail : Cocktail;

  constructor() { }

  ngOnInit() {

    this.cocktail = this.cocktails[0];
  }

}
