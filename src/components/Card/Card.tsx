import React from 'react'
import {Link} from "react-router-dom";
import './Card.scss'

interface ICardProps {
    title: string,
    imageUrl: string,
    publishedAt: string
    summary: string,
    id: string
}

let key = 'e71cd9f6ebac49a3bbb3a565321b892f'

export const Card = ({id, title, imageUrl, summary, publishedAt}: ICardProps) => {
    const date = new Date(publishedAt).toString().split(' ')
    console.log(`${date[1]} ${date[2]}th, ${date[3]}`)

    return (
        <div className='card_wrapper'>
            <div>
                <div className='card_picture'>
                    <img src={imageUrl} alt=""/>
                </div>
                <div>{`${date[1]} ${date[2]}th, ${date[3]}`}</div>
                <div className='card_title'>
                    <div>{title}</div>
                </div>
                <div>{summary}</div>
                <div><Link to={`/article/${id}`}>read more --</Link></div>
            </div>
        </div>
    )
}