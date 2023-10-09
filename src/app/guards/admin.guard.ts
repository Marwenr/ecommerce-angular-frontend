import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let user = localStorage.getItem('user')
  if(user) {
    return true;
  } else {
    router.navigate(['adminLogin'])
    return false;
  }
};
