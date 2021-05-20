import {Component, Input} from '@angular/core';
import {ButtonStyle} from './button.style';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  type = 'button';

  @Input()
  disabled = true;

  @Input()
  style = ButtonStyle.PRIMARY;

  @Input()
  label?: string;

  @Input()
  width = 'auto';
}
