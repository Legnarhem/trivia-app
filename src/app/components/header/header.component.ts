import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '@models';

enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

@Component({
  selector: 'trivia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() categories: Categorie[];
    @Output() searchParams: EventEmitter<{categorieQuestion: string, difficulty: string}> = new EventEmitter();

    public formGroup: FormGroup;
    public difficultyLevel = Object.values(DifficultyLevel);

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
      this.buildForm();
    }

    private buildForm(): void {
      this.formGroup = this.formBuilder.group({
        categorieQuestion: ['', Validators.required],
        difficulty: ['', Validators.required]
      });
    }

    /**
     * función que emite el evento para la busqueda o muestra mensaje aviso al usuario
     */
    public search(): void {
      if(this.formGroup.valid) {
        this.searchParams.emit(this.formGroup.value);
      } else {
        alert('You must choose a category and a difficulty');
      }
    }
}
