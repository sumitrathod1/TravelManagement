import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const helper = new JwtHelperService();
  const decoded = helper.decodeToken(token);
  const userRole =
    decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

  const allowedRoles = route.data?.['roles'] as Array<string>;

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    if (userRole === 'Employee') {
      router.navigate(['/driver']);
    } else {
      router.navigate(['/login']);
    }
    return false;
  }

  return true;
};
