interface Window {
    electron: {
        createUser: (connectionId: string, username: string) => Promise<User>;
        userExists: () => Promise<boolean>;
        createContact: (connectionId: string, nickname: string, user: string) => Promise<Contact>;
    }
}

