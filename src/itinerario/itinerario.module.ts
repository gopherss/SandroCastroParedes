/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ItinerarioController } from './itinerario.controller';
import { ItinerarioService } from './itinerario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerario } from './itinerario.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([Itinerario]), UsersModule],
  controllers: [ItinerarioController],
  providers: [ItinerarioService],
})
export class ItinerarioModule {}
