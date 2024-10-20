import * as signalR from '@microsoft/signalr';

export class MessageHubService {
    private connection: signalR.HubConnection;

    constructor(user: string) {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`https://localhost:44374/messagehub/?user=${user}`) // use backticks for template strings

            .withAutomaticReconnect()
            .build();
    }

    async startConnection() {
        try {
            await this.connection.start();
            console.log('SignalR connection started');
        } catch (err) {
            console.error('Error while starting SignalR connection:', err);
        }
    }

    onMessageReceived(callback: (message: string) => void) {
        this.connection.on('ReceiveMessage', (message) => {
            callback(message);
        });
    }

    async sendMessage(userTag: string, message: string) {
        try {
            await this.connection.invoke('SendMessageAsync', userTag, message);
        } catch (errr) {
            console.error('Error while sending message:', errr);
        }
    }
}