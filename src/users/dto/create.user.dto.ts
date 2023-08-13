/* eslint-disable prettier/prettier */
import { IsString, IsIn, IsNotEmpty, MinLength } from 'class-validator';

export enum UserRol {
    ONROAD = 'ONROAD', PASAJERO = 'PASAJERO'
}

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    userName: string
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    password: string

    @IsString()
    @IsNotEmpty()
    @IsIn([UserRol.ONROAD, UserRol.PASAJERO])
    rol: UserRol
}

