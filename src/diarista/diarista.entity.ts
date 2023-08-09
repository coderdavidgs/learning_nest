/* eslint-disable prettier/prettier */
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Diarista{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    nome: string;

    @Column()
    endereco: string;

    @Column()
    idade: number;
}