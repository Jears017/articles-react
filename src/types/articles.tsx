export interface ArticlesState{
    articles: any[],
    search: string
}

export enum ArticleActionType {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    SET_SEARCH = 'SET_SEARCH'
}

interface FetchArticlesAction {
    type: ArticleActionType.FETCH_ARTICLES
    payload: any[]
}

interface SetSearchAction{
    type: ArticleActionType.SET_SEARCH
    payload: string
}

export type ArticleAction = FetchArticlesAction | SetSearchAction