import { Injectable } from '@angular/core';

export interface UserType {
  name: string;
  role: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  userData: UserType[] = [
    {
      name: 'abcd',
      role: 'admin',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0oQULUIwaWYDu1BmfZZ6NXsELE_p_VhbwWQ&s'
    },
    {
      name: 'egfh',
      role: 'user',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfz_X5xCx8MstyHHXyOZkZSeZpUcrL5rO7Q&s'
    }
  ];

  constructor() { }

  getUsers(): UserType[] {
    return this.userData;
  }

  addUser(user: UserType) {
    this.userData.push(user);
    console.log('User added:', user);
  }
}
