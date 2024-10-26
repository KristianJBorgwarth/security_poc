// src/electron/entities/RegistrationId.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './User.js';

@Entity()
export class RegistrationId {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    registrationId!: number;

    @OneToOne(() => User, (user) => user.registrationId)
    user!: Promise<User>;
}
