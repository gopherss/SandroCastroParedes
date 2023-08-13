/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async createUser(user: CreateUserDTO) {
        const userFound = await this.userRepository.findOne({
            where: { userName: user.userName }
        })
        if (userFound) {
            return new HttpException('User already exists', HttpStatus.CONFLICT);
        }
        
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUser(id: number) {
        const userFound = await this.userRepository.findOne({ where: { id }, relations:['itinearios'] });
        if (!userFound) {
            return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
        return userFound;
    }

    async deleteUser(id: number) {
        const result = await this.userRepository.delete({ id });
        if (result.affected === 0) {
            return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    async updateUser(id: number, user: UpdateUserDTO) {
        const userFound = await this.userRepository.findOne({ where: { id } })

        if (!userFound) {
            return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }

        const updatedUser = Object.assign(userFound, user);

        return await this.userRepository.update({ id }, updatedUser);
    }
}
