import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../../services/user';

@Component({
  selector: 'app-display-user',
  imports: [MatCardModule],
  templateUrl: './display-user.html',
  styleUrl: './display-user.css',
})
export class DisplayUser {
  userService = inject(User);
}
