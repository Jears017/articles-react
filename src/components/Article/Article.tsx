import React, {useEffect} from 'react'
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getArticles} from "../../store/reducers/articles";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './Article.scss'
import {Button} from "@mui/material";
import ArrowLeftAltIcon from "@mui/icons-material/West";



export const Article = (props: any) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {article} = useTypedSelector(state => state.articles)
    useEffect(() => {
        axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`).then(article => dispatch(getArticles(article.data)))
    }, [])
    console.log(article.title)
    return (
        <div>
            <div data-description={article.imageUrl} className='img-container'>
                <img src={article.imageUrl} alt=""/>
            </div>
            <div className='article-container'>
                <div className='article-info'>
                    <div className='article-title'>{article.title}</div>
                    <div className='article-summary'>
                        <div className='article-summary-container'>
                            <div className='article-text'>
                                {article.summary}
                            </div>
                            <div className='article-text'>
                                At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet,
                                sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec
                                ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod
                                rutrum
                                pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing
                                odio
                                facilisis ac eu.
                                In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam
                                dictumst
                                at
                                duis praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet
                                lobortis feugiat sed aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis
                                duis
                                mauris nibh. Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed
                                convallis
                                magna eu vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis nisi,
                                consectetur ac. Ornare vitae lectus iaculis nibh ac et. Adipiscing amet in parturient
                                etiam
                                fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id
                                eu.
                            </div>
                            <div className='article-text'>
                                Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec
                                pharetra
                                non vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut.
                                Elit
                                augue dui viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet
                                magna
                                in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa
                                donec
                                sit
                                duis. Libero nascetur mauris, ac in aliquet cras duis donec. Sit porttitor sociis
                                aliquam
                                aliquet odio arcu a viverra. Proin convallis bibendum venenatis non orci id proin vitae.
                                Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet ut
                                sagittis
                                proin
                                enim.
                            </div>
                            <div className='article-text'>
                                Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing.
                                Pretium,
                                amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet
                                gravida
                                convallis elementum, metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At
                                accumsan
                                rhoncus, fringilla ut scelerisque consectetur.
                            </div>
                            <div className='article-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non
                                etiam
                                tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor
                                pretium,
                                sem
                                iaculis. Faucibus commodo mauris enim, turpis blandit.
                                Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
                                bibendum
                                aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet
                                placerat
                                ultrices lobortis proin nulla.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='article-link'>
                    <Link style={{textDecoration: 'none'}} to={`/`}>
                        <Button sx={{textTransform: 'none', color: '#363636', fontSize: 16}}
                                size="small"><ArrowLeftAltIcon/>Back to homepage</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}