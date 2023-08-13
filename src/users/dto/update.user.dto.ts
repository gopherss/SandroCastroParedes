/* eslint-disable prettier/prettier */
import { IsString, IsIn, IsOptional, MinLength } from 'class-validator';
import { UserRol } from './create.user.dto';

export class UpdateUserDTO {
    @IsString()
    @IsOptional()
    @MinLength(3)
    userName?: string

    @IsString()
    @IsOptional()
    @MinLength(3)
    password?: string

    @IsString()
    @IsOptional()
    @IsIn([UserRol.ONROAD, UserRol.PASAJERO])
    rol?: UserRol
}

