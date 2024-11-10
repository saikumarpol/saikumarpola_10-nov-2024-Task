import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public authService = inject(AuthService);  // Changed to public
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig);
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
