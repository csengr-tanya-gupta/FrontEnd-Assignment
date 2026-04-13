import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../services/user';

@Component({
  selector: 'app-add-user',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  userData = {
    name: '',
    role: '',
    image: ''
  };
  userService = inject(User);

  handleSubmit() {
    console.log('User Data:', this.userData);
    this.userService.addUser(this.userData);
    // Reset form after submission
    this.userData = { name: '', role: '', image: '' };
  }
}
