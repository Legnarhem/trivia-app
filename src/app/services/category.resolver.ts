import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TriviaService } from './trivia.service';
import { Categorie } from '@models';
 
@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService implements Resolve<Categorie[]> {
  constructor(private service: TriviaService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Categorie[]> {
    return this.service.getCategories().pipe(
      catchError(error => {
        return of([]);
      })
    );
  }
}
