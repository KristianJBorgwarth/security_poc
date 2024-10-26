// src/electron/entities/User.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    OneToMany,
} from 'typeorm';
import { IdentityKeyPair } from './IdentityKeypair.js';
import { RegistrationId } from './RegistrationId.js';
import { PreKey } from './PreKey.js';
import { Contact } from './Contact.js';
import { Chat } from './Chat.js';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('uuid')
    connectionId!: string;

    @Column()
    username!: string;

    @OneToOne(() => IdentityKeyPair, (identityKey) => identityKey.user)
    identityKey!: Promise<IdentityKeyPair>;

    @OneToOne(() => RegistrationId, (registrationId) => registrationId.user)
    registrationId!: Promise<RegistrationId>;

    @OneToMany(() => PreKey, (preKey) => preKey.user)
    preKeys!: Promise<PreKey[]>;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts!: Promise<Contact[]>;

    @OneToMany(() => Chat, (chat) => chat.contact)
    chats!: Promise<Chat[]>;

    constructor(connectionId: string, username: string) {
        this.connectionId = connectionId;
        this.username = username;
    }
}
