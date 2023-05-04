import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
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
  addUser(@Body() payload: userType) {
    return this.userService.addUser(payload);
  }

  @Delete()
  deleteUser(@Body() payload: userType) {
    return this.userService.deleteUser(payload);
  }
}
