import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { userType } from '.';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUser() {
    return await this.userService.getAllUser();
  }

  @Post()
  addUser(@Body() payload: UserEntity) {
    return this.userService.addUser(payload);
  }

  @Delete()
  deleteUser(@Body() payload: UserEntity) {
    return this.userService.deleteUser(payload);
  }
}
