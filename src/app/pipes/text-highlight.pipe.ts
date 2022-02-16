import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlight'
})
export class TextHighlightPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if (!args) {
      return value;
    }
    const div = document.createElement('div')
    const argsArray = Array.from(new Set(args.trim().split(' ')));
    argsArray.map((args) => {
      if (args !== ' ') {
        const regex = new RegExp(args, 'gi');
        const match = value.match(regex)
        if (!match) {
          return value
        }
        div.innerHTML = value;
        value = div.innerText;
       value = value.replace(regex, `<span class='highlight'>${match[0]}</span>`);
      }
    })
    return value;
  }
}
