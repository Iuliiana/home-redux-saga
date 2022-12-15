import {takeLatest} from "redux-saga/effects";
import {handleGetNewsListSaga} from "../workers/newsWorkers";
import {NEWS_LIST_REQUEST} from "../../actions/news/actionsType";

export function* watchGetNewsListSaga() {
    yield takeLatest(NEWS_LIST_REQUEST, handleGetNewsListSaga);
}
