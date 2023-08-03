import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '@models';
import { RamdomSortPipe } from '@pipes';

@Component({
  selector: 'trivia-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{ 

  @Input() question: Question;
  @Input() showResult: boolean = false;
  @Output() response: EventEmitter<string> = new EventEmitter();
  orderedAnswers: string[];
  responseUser: string = '';

  constructor(private ramdonSortPipe: RamdomSortPipe) {}

  ngOnInit(): void {
    if(this.showResult && this.question.answers && this.question.response) {
      this.orderedAnswers = this.question.answers;
      this.responseUser = this.question.response;
    } else {
      this.orderedAnswers = [...this.question.incorrect_answers];
      this.orderedAnswers.push(this.question.correct_answer);
      this.question.answers = this.ramdonSortPipe.transform(this.orderedAnswers);
    }
  }

  /**
   * guarda la respuesta
   * @param answer 
   */
  selected(answer: string): void {
    this.responseUser = answer;
    this.response.emit(answer);
  }

  /**
   * función para añadir la clase adecuada a cada respuesta
   * @param answer 
   * @returns class for the button
   */
  showClass(answer: string): string {
    let classes = '';
    if (this.showResult) {
      if(this.question.correct_answer === answer && answer === this.responseUser) {
        classes = 'btn-success';
      } else if (answer === this.responseUser) {
        classes = 'btn-danger';
      } else if(this.question.correct_answer === answer) {
        classes = 'btn-success';
      } else {
        classes= 'btn-outline-secondary';
      }
    } else {
      classes = (answer === this.responseUser) ? 'btn-secondary' : 'btn-outline-secondary';
    }
    return classes;
  }

}
