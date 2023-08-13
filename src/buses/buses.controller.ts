/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { CreateBusDTO } from './dto/create.bus.dto';
import { BusesService } from './buses.service';
import { Bus } from './bus.entity';
import { CreateOperadorDTO } from './dto/create.operador.dto';
import { Operador } from './operador.entity';

@Controller('buses')
export class BusesController {
    constructor(private busService: BusesService) { }

    @Post()
    createBus(@Body() newBus: CreateBusDTO) {
        return this.busService.createBus(newBus);
    }

    @Get()
    getBuses(): Promise<Bus[]> {
        return this.busService.getBuses();
    }

    @Post(':id/operador')
    createOperador(@Param('id', ParseIntPipe) id: number, @Body() operador: CreateOperadorDTO) {
        return this.busService.createOperador(id, operador);
    }

    @Get('/operadores')
    getOperadores(): Promise<Operador[]> {
        return this.busService.getOperadores();
    }

}

