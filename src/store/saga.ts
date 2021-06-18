import { take, all, put, call } from 'typed-redux-saga';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { eventChannel, EventChannel } from 'redux-saga';

import { websocketNewPayload } from './actions';

function createSocketChannel(socket: ReconnectingWebSocket) {
  return eventChannel((emitter) => {
    socket.onopen = (evt: Event) => {
      console.log('WebSocket opened ', evt);
    };

    socket.onmessage = (evt: MessageEvent<any>) => {
      const payload = JSON.parse(evt.data).data;
      return emitter(payload);
    };

    return socket.close;
  });
}

let wsChannel: EventChannel<any> = null as any;

function* watchSocketPings() {
  const ws = new ReconnectingWebSocket('ws://localhost:7777/ws');
  const socketChannel = yield* call(createSocketChannel, ws);

  wsChannel = socketChannel;

  console.log(wsChannel);

  while (true) {
    try {
      const payload = yield* take(socketChannel);
      yield put(websocketNewPayload(payload));
    } catch (err) {
      console.error('socket error:', err);
      ws.close();
      socketChannel.close();
    }
  }
}

export default function* rootSaga() {
  yield all([watchSocketPings()]);
}
