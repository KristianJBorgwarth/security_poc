interface Window {
    electron: {
        createUser: (connectionId: string, username: string) => Promise<User>;
        userExists: () => Promise<boolean>;

    }
}

