
import { delay, all, takeEvery } from 'redux-saga/effects';
import { ActionsConst,  } from '../../constants';


function* loadHome () {
  yield delay(1000)
  yield console.log('Just Finished a Super Long API Call')
}



export default function* () {
  yield all([
    yield takeEvery(ActionsConst.APP_SET_LOADED, loadHome),
  ]);
}