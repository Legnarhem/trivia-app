import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '@models';
import { TriviaService } from '@services';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  questions: Question[] = [];
  totalCorrectAnswer: number = 0;

  constructor(public triviaService: TriviaService, public route: Router) {}

  ngOnInit(): void {
    this.questions = this.triviaService.questions;
    if(this.questions.length === 5) {
      this.questions.forEach(question => {
        if(question.correct_answer === question.response) this.totalCorrectAnswer +=1;
      });
    } else {
      this.route.navigate(['']);
    }

  }
}
