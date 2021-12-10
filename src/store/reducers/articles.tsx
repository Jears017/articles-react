import {ArticleAction, ArticleActionType, ArticlesState} from "../../types/articles";


const initialState: ArticlesState = {
    search: '',
    articles: []
}

export const articlesReducer = (state = initialState, action: ArticleAction) => {
    switch (action.type) {
        case ArticleActionType.SET_SEARCH:
            return {...state, search: action.payload}
        case ArticleActionType.FETCH_ARTICLES:
            return {...state, articles: [...action.payload]}
        default:
            return state
    }
}

export const setSearch = (search: string) => {
    return {type: ArticleActionType.SET_SEARCH, payload: search}
}

export const fetchArticles = (articles: any[]) => {
    return {type: ArticleActionType.FETCH_ARTICLES, payload: articles }
}