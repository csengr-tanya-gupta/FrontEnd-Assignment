import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatInputModule, MatError, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
