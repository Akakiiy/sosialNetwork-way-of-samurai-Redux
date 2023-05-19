import {message} from "antd";

type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

let subscribers: Array<(messages: MessageType[]) => void> = [];

let ws: WebSocket | null;

export const chatAPI = {
    subscribe(callback: (messages: MessageType[]) => void) {
        subscribers.push(callback);
    },
    unsubscribe(callback: (messages: MessageType[]) => void) {
        subscribers.filter(s => s !== callback);
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    start() {
        createWS()
    },
    stop() {
        subscribers = [];
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close();
    },
}

const closeHandler = () => {
    setTimeout(createWS, 3000);
}

function createWS () {
    ws?.removeEventListener('close', closeHandler);
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
}
const messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
}