/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRol } from './dto/create.user.dto';
import { Itinerario } from 'src/itinerario/itinerario.entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    userName: string

    @Column()
    password: string

    @Column()
    rol: UserRol

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
    
    @OneToMany(() => Itinerario, itinerario => itinerario.user)
    itinearios: Itinerario[]
}
