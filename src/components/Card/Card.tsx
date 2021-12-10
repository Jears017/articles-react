import React from 'react'

interface ICardProps {
    title: string,
    url:string,

}

let key = 'e71cd9f6ebac49a3bbb3a565321b892f'

export const Card = (props:any) => {
    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
            <div>date</div>
            <div>Title</div>
            <div>text</div>
            <div>read more -- </div>
        </div>
    )
}