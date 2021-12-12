import React, {useEffect} from 'react'
import './SearchEngine.scss'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles, setSearch} from "../../store/reducers/articles";
import axios from "axios";
import {Card} from "../Card/Card";


export const SearchEngine = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v3/articles').then(articles => dispatch(fetchArticles(articles.data)))
    }, [])

    const searchEngineHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }

    const {search, articles} = useTypedSelector(state => state.articles)
    console.log(articles)
    return (
        <div>
            <div>Filter by keywords</div>
            <input onChange={searchEngineHandler} type="text" placeholder='The most successful IT companies in 2020'/>
            <div className='articles'>
                {articles.map(el => {
                    return <Card
                        title={el.title}
                        imageUrl={el.imageUrl}
                        publishedAt={el.publishedAt}
                        summary={el.summary}
                        key={el.id}
                    />
                })}
            </div>
        </div>
    )
}