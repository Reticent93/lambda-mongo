import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import  MoreHorizIcon  from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { useDispatch } from 'react-redux'
import {deletePost, likePost} from '../../../actions/posts';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from "moment";
import useStyles from './styles'


const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant={'h6'}>{post.creator}</Typography>
                <Typography variant={'body2'}>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size={'small'} onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize={'default'}/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant={'body2'} color={'textSecondary'}>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant={'h5'} gutterBottom component={'h2'}>{post.title}</Typography>
            <CardContent className={classes.cardActions}>
                <Typography variant={'body2'} color={'textSecondary'} component={'p'}>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size={'small'} color={'primary'} onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpIcon fontSize={'small'}/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size={'small'} color={'primary'} onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize={'small'} />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );

}

export default Post;