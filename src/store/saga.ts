import { take, all, put, call } from 'typed-redux-saga';
// import { getType } from 'typesafe-actions';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { eventChannel } from 'redux-saga';

import { websocketNewPayload } from './actions';

function createSocketChannel(socket: ReconnectingWebSocket) {
  return eventChannel((emitter) => {
    socket.onopen = (evt: Event) => {
      console.log('WebSocket opened ', evt);
    };

    socket.onmessage = (evt: MessageEvent<any>) => {
      console.log('WebSocket onmessage', evt);
      return emitter({ payload: evt.data });
    };

    return socket.close;
  });
}

function* watchSocketPings() {
  const ws = new ReconnectingWebSocket('ws://my.site.com');
  const socketChannel = yield* call(createSocketChannel, ws);

  while (true) {
    try {
      const payload = yield* take(socketChannel);
      yield put(websocketNewPayload(payload));
    } catch (err) {
      console.error('socket error:', err);
      socketChannel.close();
    }
  }
}

export default function* rootSaga() {
  yield all([watchSocketPings()]);
}
