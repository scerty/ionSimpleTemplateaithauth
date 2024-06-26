import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
	constructor(private authService: AuthService, private router: Router) {}

	canLoad(): Observable<boolean> {
		return this.authService.isAuthenticated.pipe(
			filter((val) => val !== ''), // Filter out initial Behaviour subject value
			take(1), // Otherwise the Observable doesn't complete!
			map((isAuthenticated) => {
				//console.log('Found previous token, automatic login');
				if (isAuthenticated==='true') {
					// Directly open inside area
					this.router.navigateByUrl('/secure', { replaceUrl: true });
          return false
				} else {
					// Simply allow access to the login
					return true;
				}
			})
		);
	}
}