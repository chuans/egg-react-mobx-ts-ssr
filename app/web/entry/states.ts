import {observable, toJS} from 'mobx';
import appStore from '../store/appStore';
import mergeObservable from '../helpers/mergeObservables';

const defaultState = observable({
    appStore
});

export const createServerState = () => toJS(defaultState);

export const createClientState = () => mergeObservable(defaultState, window['__INITIAL_STATE__']);