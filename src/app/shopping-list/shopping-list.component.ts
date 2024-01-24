import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 6),
  ];

  constructor() {}

  ngOnInit(): void {}
}
