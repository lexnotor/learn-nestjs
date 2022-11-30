import { Injectable } from '@nestjs/common';
import type { userType } from '.';

@Injectable()
export class UsersService {
  users = ['Ados', 'Addes', 'Fary', 'Noples'];

  getAllUser(): { data: string[] } {
    return { data: this.users };
  }

  addUser(payload: userType): { data: string[]; message: string } {
    console.log(payload);
    this.users.push(payload.name);
    return { data: this.users, message: 'added' };
  }
}
