/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusesModule } from './buses/buses.module';
import { ItinerarioModule } from './itinerario/itinerario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'hacker1',
    database: 'projecto_buses',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }),
    UsersModule, BusesModule, ItinerarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
