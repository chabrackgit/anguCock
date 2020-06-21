import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';


@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('Mojito'),
    new Cocktail('Margarita'),
    new Cocktail('Martini'),
    new Cocktail('Bluelagon'),
    new Cocktail('Vodka'),
    new Cocktail('DonPapa') 
  ]

  constructor() { }

  ngOnInit() {
  }

}
