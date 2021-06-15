import { createAction } from 'typesafe-actions';

export const websocketNewPayload = createAction('INCOMING_PAYLOAD')<any>();
