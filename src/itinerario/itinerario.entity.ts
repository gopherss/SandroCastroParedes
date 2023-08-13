/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';
import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    ManyToOne,
} from 'typeorm';

@Entity({name: 'itinerarios'})

export class Itinerario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ciudadOrigen: string;

    @Column()
    ciudadDestino: string;

    @Column()
    horarioSalida: Date;

    @Column()
    horarioLlegada: Date;

    @Column()
    precioPasaje: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.itinearios)
    user: User;

}


