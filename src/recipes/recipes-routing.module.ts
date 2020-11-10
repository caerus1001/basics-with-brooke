import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import {RecipeComponent} from './recipe/recipe.component';

const routes: Routes = [
  { path: 'recipes/:id', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
