import {combineReducers} from "redux";
import {articlesReducer} from "./articles";


export const rootReducer = combineReducers({
    articles: articlesReducer
})

export type RootState = ReturnType<typeof rootReducer>