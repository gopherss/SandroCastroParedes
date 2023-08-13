/* eslint-disable prettier/prettier */
import { IsString,IsInt, IsNotEmpty, MinLength, IsIn } from 'class-validator';

export enum AsientoTipo {
    TURISTA = 'TURISTA',
    EJECUTIVO = 'EJECUTIVO',
    PREMIUM = 'PREMIUM',
}


export class CreateBusDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    placa: string

    @IsInt()
    @IsNotEmpty()
    numeroAsientos: number

    @IsString()
    @IsNotEmpty()
    @IsIn([AsientoTipo.TURISTA, AsientoTipo.EJECUTIVO, AsientoTipo.PREMIUM])
    tipoAsiento: AsientoTipo

}
