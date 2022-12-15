import { put, retry } from 'redux-saga/effects';
import {searchSkillsFailure, searchSkillsRequest, searchSkillsSuccess} from "../../actions/skills/actions";
import {searchSkills} from "../../../api";

export function *handleChangeSearchSaga(action) {
    yield put(searchSkillsRequest(action.payload.searchQuery));
}

export function* handleSearchSkillsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.searchQuery);
        yield put(searchSkillsSuccess(data));
    } catch (e) {
        yield put(searchSkillsFailure(e));
    }
}
