import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const connectedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let user = localStorage.getItem('user')
  if(user) {
    router.navigate(['/'])
    return false
  } else {
    return true
  }
};
