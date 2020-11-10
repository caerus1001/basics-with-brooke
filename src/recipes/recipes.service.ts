import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../models/recipe';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private readonly baseUrl: string = `${environment.recipeServiceBaseUrl}/api/recipes`;

  constructor(private http: HttpClient) { }

  getRecipes(startDate: string, endDate: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}?startDate=${startDate}&endDate=${endDate}`);
  }
}
