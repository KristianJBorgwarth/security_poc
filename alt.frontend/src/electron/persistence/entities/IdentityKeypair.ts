import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.js";


@Entity()
export class IdentityKeyPair {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    publicKey!: string;

    @Column()
    privateKey!: string;

    @OneToOne(() => User, (user) => user.identityKey)
    user!: Promise<User>;
}