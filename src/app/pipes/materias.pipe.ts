import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'materias'
})
export class MateriasPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if(args[0] == "Matematicas"){
      return value + ":"
    }else{
      return "No se existe la materia"
    }
    //return value;
  }

}
