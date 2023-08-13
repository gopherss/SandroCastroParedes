/* eslint-disable prettier/prettier */
import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'operadores' })
export class Operador {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    
}

