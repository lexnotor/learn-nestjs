import { Controller, Get, Post } from '@nestjs/common';
import { userType } from '.';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Post()
  addUser(data: userType) {
    return this.userService.addUser(data);
  }
}
