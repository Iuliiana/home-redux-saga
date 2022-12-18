
import { takeLatest, debounce } from 'redux-saga/effects';
import {CHANGE_SEARCH_SKILLS, SEARCH_SKILLS_REQUEST} from "../../actions/skills/actionsType";
import {handleChangeSearchSaga, handleSearchSkillsSaga} from '../workers/searchWorkers'

function filterChangeSearchAction({type, payload}) {
    return type === CHANGE_SEARCH_SKILLS && payload.searchQuery.trim() !== ''
}

export function* watchChangeSearchSaga() {
    yield debounce(500, filterChangeSearchAction, handleChangeSearchSaga);
}

export function* watchSearchSkillsSaga() {
    yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}


