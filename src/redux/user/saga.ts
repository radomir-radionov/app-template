import { userActions } from 'redux/user';
import { all, put, takeLatest } from 'redux-saga/effects';

export function* clearUserData() {
  yield localStorage.removeItem('jwt');
  yield localStorage.removeItem('userData');
}

export function* getUser(): any {
  try {
    // const data = yield call(() => userService.getUser());

    yield put(userActions.setTest(1));
  } catch (e) {
    return null;
  }
}

function* userSaga() {
  yield all([takeLatest(userActions.setTest, getUser)]);
}

export default userSaga;
