import React, {useEffect} from 'react'
import './SearchEngine.scss'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles, filterArticles, setSearch} from "../../store/reducers/articles";
import axios from "axios";
import {Card} from "../Card/Card";
import {Inputt} from "../Inputt";
import {CardComponent} from "../Card/CardComponent";


export const SearchEngine = () => {
    const {search, articles} = useTypedSelector(state => state.articles)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v3/articles').then(articles => dispatch(fetchArticles(articles.data)))
    }, [])

    const searchEngineHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }


    return (
        <div>
            <div className='search-title'>Filter by keywords</div>
            <Inputt/>
            <div className='search-results'>Result: 10</div>

            <div className='articles'>
                {articles.filter(el => {
                    if (search === '') {
                        return el
                    } else if (el.title.toLowerCase().includes(search.toLocaleLowerCase()) || el.summary.toLowerCase().includes(search.toLocaleLowerCase())) {
                        return el
                    }
                }).map(el => {
                    return <CardComponent
                        title={el.title}
                        imageUrl={el.imageUrl}
                        publishedAt={el.publishedAt}
                        summary={el.summary}
                        key={el.id}
                        id={el.id}
                    />
                })}
            </div>
        </div>
    )
}

{/*filter(el => {
                    if (search === '') {
                        return el
                    } else if (el.title.toLowerCase().includes(search.toLocaleLowerCase()) || el.summary.toLowerCase().includes(search.toLocaleLowerCase())) {
                        return el
                    }
                }).*/}