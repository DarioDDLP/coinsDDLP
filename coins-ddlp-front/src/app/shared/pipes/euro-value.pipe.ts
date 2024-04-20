import { Pipe, PipeTransform } from '@angular/core';

const EURO_SUFFIX = ' EUR';

@Pipe({
  name: 'euroValue',
  standalone: true
})
export class EuroValuePipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }

    const formattedValue = value.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return `(${formattedValue}${EURO_SUFFIX})`;
  }

}
