/* eslint-disable prettier/prettier */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { AsientoTipo } from './dto/create.bus.dto';
import { Operador } from './operador.entity';

@Entity({ name: 'buses' })
export class Bus {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    placa: string

    @Column()
    numeroAsientos: number

    @Column()
    tipoAsiento: AsientoTipo

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @OneToOne(() => Operador)
    @JoinColumn()
    operador: Operador
}

