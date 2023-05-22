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
        subscribers[subscribersTask].push(callback as never);
    },
    unsubscribe<T extends SubscribersKeys>(subscribersTask: T, callback: SubscribersType[T][number]) {
        //@ts-ignore todo fix filter bug with TS
        subscribers[subscribersTask] = subscribers[subscribersTask].filter((s: SubscribersType[T][number]) => s !== callback);
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
    setStatusCreator('pending')
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
}

function createWS () {
    wsCleanListeners()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}

function closeHandler () {
    setTimeout(createWS, 3000);
}
function messageHandler (e: MessageEvent) {
    let newMessages = JSON.parse(e.data);
    subscribers.messages.forEach(s => s(newMessages))
}
function setStatusCreator (status: 'pending' | 'error' | 'open') {
    subscribers["status-changing"].forEach(s => s(status))
}
function openHandler () {
    setStatusCreator('open')
}
function errorHandler () {
    setStatusCreator('error')
}