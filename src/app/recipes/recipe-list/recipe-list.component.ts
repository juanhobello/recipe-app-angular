import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a Test Recipe',
      'https://encurtador.com.br/suOUY'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a Test Recipe',
      'https://encurtador.com.br/suOUY'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
