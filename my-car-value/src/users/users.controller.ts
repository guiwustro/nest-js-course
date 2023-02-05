import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserDTO } from './dtos/user.dto';

import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Serialize(UserDTO)
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDTO) {
    this.usersService.create(body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log(id);
    return this.usersService.findOne(+id);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDTO) {
    return this.usersService.update(+id, body);
  }
}
