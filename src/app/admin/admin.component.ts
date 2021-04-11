import {Component} from '@angular/core';

@Component({
  selector: 'app-admin',
  template:
    '<div fxLayout="column">\n' +
    '  <app-admin-navigation></app-admin-navigation>\n' +
    '   <div fxLayout="column" fxLayoutAlign="start center">\n' +
    '     <router-outlet></router-outlet>\n' +
    '   </div>\n' +
    '</div>'
})
export class AdminComponent {
}
