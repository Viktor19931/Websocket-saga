import { createAction } from 'typesafe-actions';

import { ChartData } from './types';

export const websocketPayload = createAction('WS_PAYLOAD')<ChartData>();
