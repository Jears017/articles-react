import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import {Link} from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/East';
import Highlighter from "react-highlight-words";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {convertData} from "../../utils/convertData";


interface ICardProps {
    title: string,
    imageUrl: string,
    publishedAt: string,
    summary: string,
    id: string
}


export const CardComponent = ({id, title, imageUrl, summary, publishedAt}: ICardProps) => {
    const {search} = useTypedSelector(state => state.articles)
    const searchWords = search.split(/\s/).filter(word => word)
    return (
        <div>
            <Card sx={{width: 400, height: 530, marginRight: 10, mt: 5, position: "relative"}}>
                <CardMedia
                    component="img"
                    height="217"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>

                    <Typography sx={{fontWeight: "normal"}} gutterBottom variant="h5" component="div">
                        <Highlighter
                            highlightClassName="YourHighlightClass"
                            searchWords={searchWords}
                            autoEscape={true}
                            textToHighlight={`${title.slice(0, 58)}...`}
                        />
                    </Typography>

                    <Typography sx={{display: "flex"}} gutterBottom variant="body1" component="div">
                        <Typography sx={{display: 'flex'}} gutterBottom
                                    variant="body1" component="div">
                            <TodayIcon/>
                        </Typography>
                        <Typography sx={{
                            fontWeight: "normal",
                            fontSize: 14,
                            color: '#363636',
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "flex-end"
                        }} gutterBottom
                                    variant="body1" component="div">
                            {convertData(publishedAt)}
                        </Typography>
                    </Typography>
                    <Typography sx={{mt: 4, fontSize: 16}} variant="body2" color="text.secondary">
                        <Highlighter
                            highlightClassName="YourHighlightClass"
                            searchWords={searchWords}
                            autoEscape={true}
                            textToHighlight={summary.slice(0, 100) + '...'}
                        />
                    </Typography>
                </CardContent>
                <CardActions sx={{position: 'absolute', bottom: 0, left: 0}}>
                    <Link style={{textDecoration: 'none'}} to={`/article/${id}`}>
                        <Button sx={{textTransform: 'none', color: '#363636', fontSize: 16}} size="small">Read
                            more <ArrowRightAltIcon/></Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}