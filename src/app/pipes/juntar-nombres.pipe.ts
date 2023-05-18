import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juntarNombres'
})
export class JuntarNombresPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return args[0] + " " + args[1];
  }

}
