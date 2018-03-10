import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinStyle'
})
export class JoinStylePipe implements PipeTransform {

  transform(styles: Array<any>, args?: any): any {
    var style = {};
    styles.forEach(objStyle => {
      Object.entries(objStyle).forEach(property => {
        style[property[0]] = property[1];
      });
    });
    return style;
  }

}
