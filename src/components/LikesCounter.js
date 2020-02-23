import React, { useState } from 'react';

// Ui
import { Button } from '@material-ui/core';

function LikesCounter() {
    const [count, setCount] = useState(0)
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
