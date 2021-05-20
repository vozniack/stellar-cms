import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';

const COMPONENTS = [InputComponent, ButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class SharedModule {
}
