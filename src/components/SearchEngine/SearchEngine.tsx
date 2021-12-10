import React, {useEffect} from 'react'
import './SearchEngine.scss'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles, setSearch} from "../../store/reducers/articles";
import axios from "axios";
import {Card} from "../Card/Card";


export const SearchEngine = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-11-10&sortBy=publishedAt&apiKey=e71cd9f6ebac49a3bbb3a565321b892f').then(articles => dispatch(fetchArticles(articles.data.articles)))
    }, [])

    const searchEngineHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }

    const {search, articles} = useTypedSelector(state => state.articles)
    console.log(articles)
    return (
        <div>
            <div>Filter by keywords</div>
            <input onChange={searchEngineHandler} type="text" placeholder='The most successful IT companies in 2020'/>
            {articles.map(el => {
                // eslint-disable-next-line react/jsx-no-undef
                return <Card/>
            })}
            <div>{articles[0].content}</div>
        </div>
    )
}