import * as actionType from './actions-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionType.INCREASE }),
    decrease: () => dispatch({ type: actionType.DECREASE }),
    reset: () => dispatch({ type: actionType.RESET }),
    setCounter: (payload) => dispatch({ type: actionType.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  };
};

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionType.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionType.ASYNC_INCREASE_END });
      r('Resolved!');
    }, 2000);
  });
};

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionType.ASYNC_INCREASE_START });

  return await new Promise((resolved, reject) => {
    setTimeout(() => {
      dispatch({ type: actionType.ASYNC_INCREASE_ERROR });
      reject('Resolved!');
    }, 2000);
  });
};
