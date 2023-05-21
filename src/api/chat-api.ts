type SubscribersType = {
    'messages': Array<CallbackMessagesType>,
    'status-changing': Array<CallbackStatusType>
}
type SubscribersKeys = keyof SubscribersType
export type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
type CallbackMessagesType = (messages: Array<MessageType>) => void;
type CallbackStatusType = (status: 'pending' | 'error' | 'open') => void

let subscribers: SubscribersType = {
    'messages': [],
    'status-changing': []
};

let ws: WebSocket | null;

export const chatAPI = {
    subscribe<T extends SubscribersKeys>(subscribersTask: T, callback: SubscribersType[T][number]) {
        console.log('subscribe ', subscribers[subscribersTask])
        subscribers[subscribersTask].push(callback as never);
    },
    unsubscribe<T extends SubscribersKeys>(subscribersTask: T, callback: SubscribersType[T][number]) {
        //@ts-ignore todo fix filter bug with TS
        subscribers[subscribersTask] = subscribers[subscribersTask].filter((s: SubscribersType[T][number]) => s !== callback);
        console.log('unsubscribe ', subscribers[subscribersTask]);
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    start() {
        createWS()
    },
    stop() {
        subscribers.messages = [];
        wsCleanListeners();
        ws?.close();
    },
}

function wsCleanListeners () {
    console.log('clear', subscribers)
    setStatusCreator('pending')
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
}

const closeHandler = () => {
    console.log('close')
    setTimeout(createWS, 3000);
}
const messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers.messages.forEach(s => s(newMessages))
}
const setStatusCreator = (status: 'pending' | 'error' | 'open') => {
    subscribers["status-changing"].forEach(s => s(status))
}
const openHandler = () => {
    console.log('open')
    setStatusCreator('open')
}
const errorHandler = () => {
    console.log('error')
    setStatusCreator('error')
}

function createWS () {
    wsCleanListeners()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}