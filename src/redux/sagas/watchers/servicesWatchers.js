import {takeLatest} from "redux-saga/effects";
import {SERVICE_DETAIL_REQUEST, SERVICES_LIST_REQUEST} from "../../actions/services/actionsType";
import {handleGetServiceDetailSaga, handleGetServicesListSaga} from "../workers/servicesWorkers";

export function* watchGetServicesListSaga() {
    yield takeLatest(SERVICES_LIST_REQUEST, handleGetServicesListSaga);
}

export function* watchGetServiceDetailSaga() {
    yield takeLatest(SERVICE_DETAIL_REQUEST, handleGetServiceDetailSaga);
}
