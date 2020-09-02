import { put, call } from "redux-saga/effects";

type Func = (...args: any[]) => any;
type Args<T> = T extends (args: infer U) => void ? U : any;

type Entity = {
  request: Func;
  success: Func;
  failure: Func;
};

export default <T extends Entity, F extends Func>(entity: T, asyncFn: F) =>
  function* fetchEntity<R>(asyncFnPayload?: Args<F>, requestPayload?: R) {
    try {
      yield put(entity.request(requestPayload));
      const res = yield call(asyncFn as any, asyncFnPayload);
      yield put(entity.success(res));
    } catch (err) {
      yield put(entity.failure(err));
    }
  };
