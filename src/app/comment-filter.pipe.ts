import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from './comment.model';

@Pipe({
  name: 'commentFilter',
  pure: false
})
export class CommentFilterPipe implements PipeTransform {

  transform(input: Comment[], filter) {
    console.log(input)
    var output: Comment[] = [];
    if (input == null) 
      return [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].bookKey == filter){
        output.push(input[i]);
      }

    }
    return output;
  }

}
