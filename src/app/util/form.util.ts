import {FormControl, FormGroup} from '@angular/forms';

export class FormUtil {

  public static getFormControl(formGroup: FormGroup, name: string): FormControl {
    return formGroup.get(name) as FormControl;
  }
}
