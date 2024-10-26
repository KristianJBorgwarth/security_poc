import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
    CreateDateColumn,
} from 'typeorm';
import { User } from './User.js';
import { Chat } from './Chat.js';
import { Session } from './Session.js';
import { IdentityKey } from './IdentityKey.js';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('uuid')
    connectionId!: string;

    @Column({ nullable: true })
    nickname?: string;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, (user) => user.contacts)
    user!: Promise<User>;

    @OneToOne(() => Session, (session) => session.contact)
    session!: Promise<Session>;

    @OneToOne(() => IdentityKey, (identityKey) => identityKey.contact)
    identityKey!: Promise<IdentityKey>;

    @OneToOne(() => Chat, (chat) => chat.contact)
    chat!: Promise<Chat>;
}
