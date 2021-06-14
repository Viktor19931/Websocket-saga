import { put, call } from 'typed-redux-saga';

type Func = (...args: any[]) => any;
type Args<T> = T extends (args: infer U) => void ? U : any;

type Entity = {
  request: Func;
  success: Func;
  failure: Func;
};

const asyncEntity = <T extends Entity, F extends Func>(entity: T, asyncFn: F) =>
  function* fetchEntity<R>(asyncFnPayload?: Args<F>, requestPayload?: R) {
    try {
      yield put(entity.request(requestPayload || asyncFnPayload));
      const res = yield* call(asyncFn as any, asyncFnPayload);
      yield put(entity.success(res));
    } catch (err) {
      yield put(entity.failure(err));
    }
  };

export default asyncEntity;
