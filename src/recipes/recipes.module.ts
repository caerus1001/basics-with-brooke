import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [RecipesComponent, RecipeComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule
  ]
})
export class RecipesModule { }
