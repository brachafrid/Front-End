import { React, useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Post1 from "./PostComponent/Post1"
import AllPost from './PostComponent/AllPost'

export default function Posts() {
    const [post, setPost] = useState(null);
    let { url } = useRouteMatch();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        console.log(post)
    }, [post])
    return (
        <div>
            <Switch>
                <Route exact path="/application/posts">
                    <AllPost setPost={setPost} />
                </Route>
                <Route path={`/application/posts/`}>
                    <Post1 post={post} />
                </Route>
            </Switch>
        </div>

    )
}
