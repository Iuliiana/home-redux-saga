import {call, put, delay} from "redux-saga/effects";
import {geNewsListSuccess} from "../../actions/news/actions";
import {getNewsList} from "../../../api";

function* getNewsListRequest(data) {
    while (true) {
        try {
            return yield call(getNewsList, data)
        } catch (error) {
            yield put({
                type: 'UPDATE_RETRY',
                error,
            })
            yield delay(3 * 1000)
        }
    }
}

export function* handleGetNewsListSaga(action) {
    const data = yield call(getNewsListRequest, action.payload.lastNewsId)
    yield put(geNewsListSuccess(data));

}
