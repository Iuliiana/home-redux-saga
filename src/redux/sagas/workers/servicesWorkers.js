import {call, put} from "redux-saga/effects";
import {getServiceDetail, getServicesList} from "../../../api";
import {getServiceDetailSuccess, getServicesListSuccess, servicesFailure} from "../../actions/services/actions";

export function* handleGetServicesListSaga() {
    try {
        const data = yield call(getServicesList);
        yield put(getServicesListSuccess(data));
    } catch (error) {
        yield put(servicesFailure(error));
    }

}

export function* handleGetServiceDetailSaga(action) {
    try {
        const data = yield call(getServiceDetail, action.payload.serviceId);
        yield put(getServiceDetailSuccess(data));
    } catch (error) {
        yield put(servicesFailure(error));
    }

}