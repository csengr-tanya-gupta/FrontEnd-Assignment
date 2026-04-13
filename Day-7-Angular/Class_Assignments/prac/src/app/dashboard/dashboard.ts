import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  route = inject(Router);
  navigateToHome(){
    this.route.navigateByUrl("");
  }
}
