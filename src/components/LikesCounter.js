import React, { useEffect, useState } from 'react';

// Axios
import axios from 'axios';

// Ui
import { Button } from '@material-ui/core';

function LikesCounter(props) {
    const [post, setPosts] = useState(props.currentPost)
    const [count, setCount] = useState(parseInt(props.currentPost.acf.likes))

    useEffect(() => {
        axios.get("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts/" + props.currentPost.id)
        .then(function (response) {
            // handle success
            console.log("axios response", response, props.currentPost);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },
    []);

    useEffect(() => {
        console.log(count)
        post.acf.likes = count
        console.log(post.acf.likes)
        console.log(post)
        axios.put("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts/" + props.currentPost.id, {post})
        .then(function (response) {
            // handle success
            console.log("axios response", response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },
    [count]);

    

    return (
        <Button
            color={"inherit"}
            variant={"outlined"}
            onClick={() => setCount(count + 1)}
        >
           <span
           role="img"
           aria-label={"like"}
           style={{marginRight: 8 }}>👍</span>
           <span>{count}</span>
        </Button>
    );
}

export { LikesCounter };
