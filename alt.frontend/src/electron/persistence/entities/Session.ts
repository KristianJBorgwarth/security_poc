// src/electron/entities/Session.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Contact } from './Contact.js';

@Entity()
export class Session {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @OneToOne(() => Contact, (contact) => contact.session)
    contact!: Promise<Contact>;

    @Column()
    sessionData!: string;
}
