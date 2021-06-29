import Post from "./Post/Post";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from './styles'

const Posts = ({setCurrentId}) => {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)
    console.log(posts)

    return !posts.length ? <CircularProgress/> :
        <Grid container className={classes.container} alignItems={'stretch'} spacing={3}> {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId}/>
            </Grid>
        ))

        }
        </Grid>
}

export default Posts;