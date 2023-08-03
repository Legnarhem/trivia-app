import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Categorie, Question } from '@models';

interface TriviaCategory {
  trivia_categories: Categorie[];
}

interface Quiz {
  response_code: number;
  results: Question[];
}
const NUMBER_QUESTION = 5;

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  
  //Define URL API
  apiURL = "https://opentdb.com";

  private _questions: Question[] = [];

  constructor(private http: HttpClient) { }

  public set questions(questions: Question[]) {
    this._questions = questions;
  }

  public get questions(): Question[] {
    return this._questions;
  }

  /**
   * función que llama a la api para obtener las categorias y prepara la respuesta 
   * @returns Observable con la lista de categorias
   */
  getCategories(): Observable<Categorie[]> {
    const url = `${this.apiURL}/api_category.php`
    return this.http.get<TriviaCategory>(url).pipe(
      map(data => data.trivia_categories)
    );
  }

  /**
   * función que llama a la api para obtener el quiz
   * @param category 
   * @param difficulty 
   * @returns Observable con el quiz
   */
  getQuiz(category: string, difficulty: string): Observable<Question[]> {
    const url = `${this.apiURL}/api.php`;
    const params = new HttpParams()
      .set('amount', NUMBER_QUESTION)
      .set('category', category)
      .set('difficulty', difficulty)
      .set('type', 'multiple');
    
    return this.http.get<Quiz>(url, {params}).pipe(
      map(data => data.results)
    );
  }

}
