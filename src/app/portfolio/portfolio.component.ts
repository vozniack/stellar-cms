import {Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template:
    '<div fxLayout="column">\n' +
    '  <app-portfolio-navigation></app-portfolio-navigation>\n' +
    '   <div fxLayout="column" fxLayoutAlign="start center">\n' +
    '     <router-outlet></router-outlet>\n' +
    '   </div>\n' +
    '</div>'
})
export class PortfolioComponent {
}
