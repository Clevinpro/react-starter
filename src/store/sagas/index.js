import { all } from 'redux-saga/effects';
import Home from './home'

export default function* () {
  yield all([
    Home(),
  ]);
}
