/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItinerarioService } from './itinerario.service';
import { CreateItinerarioDTO } from './dto/create.itinerario.dto';

@Controller('itinerario')
export class ItinerarioController {
    constructor(private itinearioService: ItinerarioService) { }

    @Get()
    getItinearios() {
        return this.itinearioService.getItinearios();
    }

    @Post()
    createItineario(@Body() itineario: CreateItinerarioDTO) {
        return this.itinearioService.createItineario(itineario);
    }

}
