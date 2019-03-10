import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string, rowname: string): any {
    let returnArray: any[] = [];

      array.forEach(row => {
        let arrayOfKeys = Object.keys(row);
        arrayOfKeys.forEach(key => {
          if (rowname == null  || rowname === '' || key === rowname ) {
            if ((row[key] != null && (row[key].toString().toLocaleUpperCase().indexOf(query.toLocaleUpperCase()) !== -1) || query === '')) {
              if (returnArray.indexOf(row) === -1)
              returnArray.push(row);
            }
          }
        } );
      });
      // return _.filter(array, row => row.valueOf(rowname).toString().indexOf(query) > -1);

    return returnArray;
  }
}
