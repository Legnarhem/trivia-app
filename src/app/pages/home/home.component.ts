import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Categorie, Question } from '@models';
import { TriviaService } from '@services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: Categorie[] = [];
  questions: Question[] = [];
  responses: number[] = [];
  aux: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private triviaService: TriviaService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: Data) => {
      this.categories = response['categories'];
    });
  }

  /**
   * función que recupera el quiz de la api
   * @param params objeto con los parametros de busqueda
   */
  public search(params: {
    categorieQuestion: string;
    difficulty: string;
  }): void {
    const { categorieQuestion, difficulty } = params;
    this.triviaService.getQuiz(categorieQuestion, difficulty).subscribe({
      next: (response) => (this.questions = response),
      error: (e) => console.error('HTTP error', e),
    });
  }

  /**
   * función que guarda la respuesta del usuario en la pregunta y guarda el índice de la pregunta respondida
   * @param answer
   * @param index
   */
  public responseUser(answer: string, index: number): void {
    this.questions[index].response = answer;
    if (!this.responses.find((x) => x === index)) {
      this.responses.push(index);
    }
  }

  /**
   * guarda las preguntas en el servicio y redirige
   */
  public showResult(): void {
    this.triviaService.questions = this.questions;
    this.route.navigate(['/result']);
  }
}
