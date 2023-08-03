import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const ResultGuard: CanActivateFn = (route, state) => {
  const data = inject(Router).getCurrentNavigation()?.extras;
  if (data && data.state && data.state['responses'] === 5) {
    return true;
  } else {
    return inject(Router).navigate(['']);
  }
};
