import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model'

@Pipe({
  name: 'current',
  pure: false
})
export class CurrentPipe implements PipeTransform {

  transform(input: Book[]) {
    var output: Book[] = [];

    for (var i = 0; i < input.length; i++) {
      if(input[i].current == "current"){
        output.push(input[i]);
      }

    }
    return output;
  }

}
