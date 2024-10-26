import { app } from "electron";
import path from "path";

export function IsDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
}

export function getPreloadPath() {
    return path.resolve(
        app.getAppPath(),
        IsDevelopment() ? './' : '../',
        'dist-electron/preload.cjs'
    )
}

export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}