import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Time'
  })
  export class TimePipe implements PipeTransform {
    transform(value: number): string {
       if(value > 0 && value/60 < 1) {
         return value + ' Minutes';
  
       } else {
         return (value/60).toFixed(1) + ' Hour(s)';
       }
    }
  }