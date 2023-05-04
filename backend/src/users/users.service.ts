import { Injectable } from '@nestjs/common';
import type { userType } from '.';

@Injectable()
export class UsersService {
  users = ['Ados', 'Addes', 'Fary', 'Noples'];

  getAllUser(): { data: string[] } {
    return { data: this.users };
  }

  addUser(payload: userType): { data: string[]; message: string } {
    this.users.push(payload.name);
    return { data: this.users, message: 'added' };
  }

  deleteUser(payload: userType): { data: string[]; message: string } {
    const index = this.users.findIndex((item) => item == payload.name);
    index != -1 && this.users.splice(index, 1);
    return { data: this.users, message: 'deleted' };
  }
}
