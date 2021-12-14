import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import {Link} from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/East';



interface ICardProps {
    title: string,
    imageUrl: string,
    publishedAt: string
    summary: string,
    id: string
}

export const CardComponent = ({id, title, imageUrl, summary, publishedAt}: ICardProps) => {
    const date = new Date(publishedAt).toString().split(' ')
    return (
        <div>
            <Card sx={{maxWidth: 400, height: 530, marginRight: 6, mt: 6, position: "relative"}}>
                <CardMedia
                    component="img"
                    height="217"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography sx={{fontWeight: "normal"}} gutterBottom variant="h5" component="div">
                        {`${title.slice(0, 58)}...`}
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
                            {`${date[1]} ${date[2]}th, ${date[3]}`}
                        </Typography>
                    </Typography>
                    <Typography sx={{mt: 4, fontSize: 16}} variant="body2" color="text.secondary">
                        {summary.slice(0, 100) + '...'}
                    </Typography>
                </CardContent>
                <CardActions sx={{position: 'absolute', bottom: 0, left: 0}}>
                    <Link style={{textDecoration: 'none'}} to={`/article/${id}`}>
                        <Button sx={{textTransform: 'none', color: '#363636', fontSize: 16 }} size="small">Read more <ArrowRightAltIcon/></Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}