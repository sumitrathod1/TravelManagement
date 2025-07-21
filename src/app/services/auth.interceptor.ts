import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EmployeeService } from './employee.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const empService = inject(EmployeeService);
  const token = empService.getToken();

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedReq);
  }

  return next(req);
};
