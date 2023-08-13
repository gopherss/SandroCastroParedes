/* eslint-disable prettier/prettier */
import { IsString, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';


export class CreateItinerarioDTO {
    @IsString()
    @IsNotEmpty()
    ciudadOrigen: string

    @IsString()
    @IsNotEmpty()
    ciudadDestino: string

    @IsDateString()
    @IsNotEmpty()
    horarioSalida: Date

    @IsDateString()
    @IsNotEmpty()
    horarioLlegada: Date

    @IsNumber()
    precioPasaje: number;
    
    @IsNumber()
    @IsNotEmpty()
    userId: number

    
}
