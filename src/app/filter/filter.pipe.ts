import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currentquestion'})

export class CurrentQuestion implements PipeTransform {
  transform(array: any, index: number): any {
    let currentQuestion = [];
    let oneField = [];
    oneField=array[index];
    currentQuestion.push(oneField);
    return currentQuestion;
  }
}