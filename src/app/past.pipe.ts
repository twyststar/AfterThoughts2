import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model'

@Pipe({
  name: 'past',
  pure: false
})
export class PastPipe implements PipeTransform {

  transform(input: Book[]) {
    var output: Book[] = [];

    for (var i = 0; i < input.length; i++) {
      if(input[i].current == "past"){
        output.push(input[i]);
      }
    }
    return output;
  }

}
