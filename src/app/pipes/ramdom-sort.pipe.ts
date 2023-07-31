import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ramdomSort'
})
export class RamdomSortPipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.sort(() => Math.random() - 0.5);
  }

}
