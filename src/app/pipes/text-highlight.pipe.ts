import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlight'
})
export class TextHighlightPipe implements PipeTransform {

  private static escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  transform(value: any, args: string): any {
    if (!args) {
      return value;
    }
    const div = document.createElement('div')
    const argsArray = Array.from(new Set(args.trim().split(' '))).filter(Boolean);
    const regex = new RegExp(
      `(${argsArray.map((value) => `(${TextHighlightPipe.escapeRegExp(value)})`).join('|')})`,
      'gi',
    );

    div.innerHTML = value;
    value = div.innerText;
    value = value.replace(regex, '<span class=\'highlight\'>$1</span>');

    return value;
  }
}
