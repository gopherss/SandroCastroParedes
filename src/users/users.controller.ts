/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Delete,
    Patch,
    Body,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create.user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDTO } from './dto/update.user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUser(id);
    }
 
    @Post()
    createUser(@Body() newUser: CreateUserDTO) {
        return this.usersService.createUser(newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDTO) {
        return this.usersService.updateUser(id, user);
    }

}
