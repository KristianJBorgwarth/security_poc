import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User.js';
import { Contact } from '../entities/Contact.js';
import { IdentityKey } from '../entities/IdentityKey.js';
import { IdentityKeyPair } from '../entities/IdentityKeypair.js';
import { Chat } from '../entities/Chat.js';
import { Message } from '../entities/Message.js';
import { Session } from '../entities/Session.js';
import { PreKey } from '../entities/PreKey.js';
import { RegistrationId } from '../entities/RegistrationId.js';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './src/electron/persistence/data/msg.db',
    entities: [
        User,
        Contact,
        IdentityKey,
        IdentityKeyPair,
        Chat,
        Message,
        Session,
        PreKey,
        RegistrationId
    ],
    migrations: [],
    synchronize: true,
});
