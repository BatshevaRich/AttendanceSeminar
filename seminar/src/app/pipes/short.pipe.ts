import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {

  ////איך עושים עבור הסינון????????????
  transform(value:number): any {
    if (value>5)
      return 0;
    
  }

}
