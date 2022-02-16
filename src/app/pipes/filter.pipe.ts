import { Pipe, PipeTransform } from '@angular/core';
import { Articles } from "../interfaces/articles";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Articles[], args: string): Articles[] {
    if (!args) {
      return value;
    }

    const argsArray = args.split(' ');
    const match: Articles[] = [];
    argsArray.map((args) => {
      value?.forEach((article: Articles) => {
        if (article.title.toUpperCase().includes(args.toUpperCase()) || article.summary.toUpperCase().includes(args.toUpperCase())) {
          match.push(article)
        }
      })
    })

    if (match.length === 0) {
      return value = []
    }

    return Array.from(new Set(match))
  }
}
