import {createStore, combineReducers, applyMiddleware, compose,} from 'redux';
import skillsReducer from "./reducers/skillsReducer";
import servicesReducer from "./reducers/servicesReducer";
import {newsReducer} from "./reducers/newsReducer";
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';


const reducer = combineReducers({
    skills: skillsReducer,
    services: servicesReducer,
    news: newsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);
export default store;