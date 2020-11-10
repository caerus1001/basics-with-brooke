import { Component, OnInit } from '@angular/core';
import {RecipesService} from './recipes.service';
import {Recipe} from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recentRecipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    let fortnightDate: Date = new Date(new Date().setDate(new Date().getDate() - 14));

    this.recipesService.getRecipes(fortnightDate.toISOString(),
      new Date().toISOString()).subscribe(recipes => this.recentRecipes = recipes);
  }
}
