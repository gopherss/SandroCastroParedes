/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itinerario } from './itinerario.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateItinerarioDTO } from './dto/create.itinerario.dto';

@Injectable()
export class ItinerarioService {

    constructor(
        @InjectRepository(Itinerario)
        private itinearioRepository: Repository<Itinerario>,
        private userService: UsersService
    ) { }

    async createItineario(itineario: CreateItinerarioDTO) {

        const userFound = this.userService.getUser(itineario.userId);

        if (!userFound) {
            return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }

        const newItineario = this.itinearioRepository.create(itineario);
        return this.itinearioRepository.save(newItineario);
    }

    async getItinearios() {
        return await this.itinearioRepository.find({ relations: ['user'] });
    }
}
