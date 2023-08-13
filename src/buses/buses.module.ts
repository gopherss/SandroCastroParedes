import { Module } from '@nestjs/common';
import { BusesController } from './buses.controller';
import { BusesService } from './buses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bus } from './bus.entity';
import { Operador } from './operador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bus, Operador])],
  controllers: [BusesController],
  providers: [BusesService],
})
export class BusesModule {}
