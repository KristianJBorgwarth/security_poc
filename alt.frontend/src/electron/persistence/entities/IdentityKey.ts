// src/electron/entities/IdentityKey.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Contact } from './Contact.js';

@Entity()
export class IdentityKey {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @OneToOne(() => Contact, (contact) => contact.identityKey)
    contact!: Promise<Contact>;

    @Column()
    publicKey!: string;
}
