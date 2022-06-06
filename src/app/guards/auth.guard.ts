import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Auth } from 'aws-amplify';
import { from, Observable, of } from 'rxjs';
import { NotificationService } from '../componentes/notification/notification.service';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(
    private notification: NotificationService,
    private router: Router
  ) {}

  canActivate({
    route,
    state,
  }: {
    route: ActivatedRouteSnapshot;
    state: RouterStateSnapshot;
  }): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated();
  }

  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map((result) => {
        return true;
      }),
      catchError((error) => {
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
}
