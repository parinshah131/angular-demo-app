import { Pipe, PipeTransform } from '@angular/core';

//Pipe` to define a custom pipe.
@Pipe({
  name: 'titlePipe',
  standalone: true
})

export class TitlePipe implements PipeTransform {
  transform(value: string): string {

    // Uses a regex to find the first letter of each word (`\b\w`).
    // Calls `toUpperCase()` to convert each first letter to uppercase.
    return value.replace(/\b\w/g, char => char.toUpperCase());
  }
}
