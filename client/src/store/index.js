import { createStore, combineReducers, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'


const middleware = applyMiddleware(thunk);


const rootReducer = combineReducers({

})


const store = createStore(
    rootReducer,
    middleware
)

export default store;