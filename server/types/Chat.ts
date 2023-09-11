import { Message } from './Message';

export interface Chat {
    uuid: string;
    messages: Message[];
    stream: string;
    createdAt: Date;
    updatedAt: Date;
    status: "ACTIVE" | "INACTIVE" | "DELETED";
}