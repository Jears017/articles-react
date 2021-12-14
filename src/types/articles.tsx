export interface IArticle {
    title: string,
    imageUrl: string,
    publishedAt: string
    summary: string,
    id: string
}

export interface ArticlesState {
    articles: any[],
    search: string,
    article: IArticle
}


export enum ArticleActionType {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    SET_SEARCH = 'SET_SEARCH',
    FILTER_ARTICLES = 'FILTER_ARTICLES',
    GET_ARTICLE = 'GET_ARTICLE'
}

interface FetchArticlesAction {
    type: ArticleActionType.FETCH_ARTICLES
    payload: any[]
}

interface SetSearchAction {
    type: ArticleActionType.SET_SEARCH
    payload: string
}

interface FilterArticlesAction {
    type: ArticleActionType.FILTER_ARTICLES,
    payload: string
}

interface GetArticlesAction {
    type: ArticleActionType.GET_ARTICLE,
    payload: IArticle
}

export type ArticleAction = FetchArticlesAction | SetSearchAction | FilterArticlesAction | GetArticlesAction