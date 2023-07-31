import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[quiz-result]'
})
export class ShowResultDirective implements AfterViewInit{

  @Input() totalScore: number;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    if(this.totalScore < 2) {
      this.el.nativeElement.style.background = 'red';
    } else if(this.totalScore > 1 && this.totalScore < 4) {
      this.el.nativeElement.style.background = 'yellow';
    } else {
      this.el.nativeElement.style.background = 'green';
    }
  }

}
