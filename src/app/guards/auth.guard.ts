import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { NotificationService } from '../componentes/notification/notification.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private notification: NotificationService) {}

  canActivate({
    route,
    state,
  }: {
    route: ActivatedRouteSnapshot;
    state: RouterStateSnapshot;
  }): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve) => {
      Auth.currentUserInfo().then((d) => {
        if (!d.attributes.email_verified) {
          this.notification.showError(
            'Usuário precisa ter o email verificado para sugerir novas Frases.'
          );
        }
        resolve(d.attributes.email_verified);
      });
    });
  }
}
