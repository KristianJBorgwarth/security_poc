// src/electron/entities/PreKey.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User.js';

@Entity()
export class PreKey {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })
    keyId!: number;

    @Column()
    publicKey!: string;

    @Column()
    privateKey!: string;

    @Column({ nullable: true })
    signature?: string;

    @Column()
    keyType!: string; // 'Signed' or 'OneTime'

    @Column({ default: false })
    isUsed!: boolean;

    @ManyToOne(() => User, (user) => user.preKeys)
    user!: Promise<User>;
}
