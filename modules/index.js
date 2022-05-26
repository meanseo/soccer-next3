import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { watchCounter } from './common/counter';
import register,{ registerSaga } from './auth/register';
import login, {loginSaga} from './auth/login';
import {HYDRATE} from "next-redux-wrapper";
import {connectRouter} from 'react';
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log("HYDRATE", action);
            return { ...state, ...action.payload };
        default:
            return state;
    }
},
  counter, register, login
});

export function* rootSaga() {
  yield all([watchCounter(), registerSaga(), loginSaga()]);
}

export default rootReducer;