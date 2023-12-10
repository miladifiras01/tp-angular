import { CanDeactivateFn } from '@angular/router';
import { AddCvComponent } from '../cv/add-cv/add-cv.component';

export const addCvGuard: CanDeactivateFn<AddCvComponent> = (
  component: AddCvComponent
) => {
  return Object.values(component.f).some((field) => field.value)
    ? window.confirm('Are you sure you want to leave?')
    : true;
};
