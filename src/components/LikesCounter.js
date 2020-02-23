import React, { useEffect, useState } from 'react';

// Axios
import axios from 'axios';

// Ui
import { Button } from '@material-ui/core';

function LikesCounter(props) {
    const post = props.currentPost
    const [count, setCount] = useState(parseInt(props.currentPost.acf.likes))

    useEffect(() => {
        post.acf.likes = count
        axios.put("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts/" + props.currentPost.id, {post})
        .catch(error => console.log(error))
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
