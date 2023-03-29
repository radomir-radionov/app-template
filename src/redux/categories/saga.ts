import responseText from 'constants/responseText';

import { toastActions } from 'redux/toast';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { booksService } from 'services';
import { CategoryProps } from 'types/categories';
import { ToastTypes } from 'types/toast';

import { categoriesActions } from './slice';

export function* getCategories() {
  try {
    const categories: CategoryProps[] = yield call(() => booksService.getCategories());

    yield put(categoriesActions.setCategories(categories));
  } catch (e) {
    yield put(categoriesActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.ERROR,
        text: responseText.CATEGORIES_ERROR,
      })
    );
  }
}

function* categoriesSaga() {
  yield all([takeLatest(categoriesActions.getCategories, getCategories)]);
}

export default categoriesSaga;