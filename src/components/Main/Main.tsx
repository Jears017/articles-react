import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles} from "../../store/reducers/articles";
import axios from "axios";
import {SearchField} from "../SearchField/SearchField";
import {CardComponent} from "../Card/CardComponent";
import './Main.scss'


export const Main = () => {
    const {search, articles} = useTypedSelector(state => state.articles)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v3/articles').then(articles => dispatch(fetchArticles(articles.data)))
    }, [])

    const filteredArr = articles.filter(el => {
        if (search === '') {
            return el
        } else if (el.title.toLowerCase().includes(search.toLocaleLowerCase()) || el.summary.toLowerCase().includes(search.toLocaleLowerCase())) {
            return el
        }
    })

    return (
        <div>
            <div className='search-title'>Filter by keywords</div>
            <SearchField/>
            <div className='search-results'>Result: {filteredArr.length}</div>

            <div className='articles'>
                {filteredArr.map((el) => {
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
