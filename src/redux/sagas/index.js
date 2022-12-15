import { spawn } from 'redux-saga/effects';
import {watchChangeSearchSaga, watchSearchSkillsSaga} from "./watchers/serchWatchers";
import {watchGetServiceDetailSaga, watchGetServicesListSaga} from "./watchers/servicesWatchers";
import {watchGetNewsListSaga} from "./watchers/newsWatchers";

export default function* saga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
    yield spawn(watchGetServicesListSaga);
    yield spawn(watchGetServiceDetailSaga);
    yield spawn(watchGetNewsListSaga);
}