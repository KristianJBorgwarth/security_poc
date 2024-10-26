// src/electron/entities/Chat.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne,
    CreateDateColumn,
} from 'typeorm';
import { Contact } from './Contact.js';
import { Message } from './Message.js';

@Entity()
export class Chat {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @OneToOne(() => Contact, (contact) => contact.chat)
    contact!: Promise<Contact>;

    @OneToMany(() => Message, (message) => message.chat)
    messages!: Promise<Message[]>;

    @CreateDateColumn()
    createdAt!: Date;
}
