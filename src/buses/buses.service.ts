/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bus } from './bus.entity';
import { Repository } from 'typeorm';
import { CreateBusDTO } from './dto/create.bus.dto';
import { CreateOperadorDTO } from './dto/create.operador.dto';
import { Operador } from './operador.entity';

@Injectable()
export class BusesService {
    constructor(
        @InjectRepository(Bus) private busRepository: Repository<Bus>,
        @InjectRepository(Operador) private operadorRepository: Repository<Operador>
    ) { }


    async createBus(bus: CreateBusDTO) {
        const busFound = await this.busRepository.findOne({
            where: { placa: bus.placa }
        })

        if (busFound) {
            return new HttpException('Bus already exists', HttpStatus.CONFLICT);
        }

        const newBus = this.busRepository.create(bus);
        return await this.busRepository.save(newBus);
    }

    async getBuses() {
        return await this.busRepository.find();
    }

    async getOperadores(){
        return await this.operadorRepository.find();
    }


    async createOperador(id: number, operador: CreateOperadorDTO) {
        const busFound = await this.busRepository.findOne({ where: { id } });

        if (!busFound) {
            return new HttpException('Bus Not Found', HttpStatus.NOT_FOUND);
        }

        const newOperador = this.operadorRepository.create(operador);
        const savedOperador = await this.operadorRepository.save(newOperador);

        busFound.operador = savedOperador;

        return this.busRepository.save(busFound);
    }

}
