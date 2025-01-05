import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectToSorryGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // If user is visiting /sorry-button, allow access and mark it as visited
    if (state.url === '/sorry-button') {
      localStorage.setItem('hasVisitedSorryButton', 'true');
      return true;
    }

    // If user has not visited /sorry-button before, redirect to /sorry-button
    if (!localStorage.getItem('hasVisitedSorryButton')) {
      this.router.navigate(['/sorry-button']);
      return false;
    }

    // Otherwise, allow access to other pages
    return true;
  }
}
