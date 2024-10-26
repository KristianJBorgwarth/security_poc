// src/electron/entities/Message.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
} from 'typeorm';
import { Chat } from './Chat.js';

@Entity()
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => Chat, (chat) => chat.messages)
    chat!: Promise<Chat>;

    @Column()
    senderId!: string;

    @Column()
    content!: string;

    @CreateDateColumn()
    timestamp!: Date;

    @Column({ default: false })
    isDelivered!: boolean;

    @Column({ default: false })
    isRead!: boolean;
}
