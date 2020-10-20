import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
