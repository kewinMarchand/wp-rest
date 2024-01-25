import React, { useState } from 'react';

function LikesCounter() {
    const [count, setCount] = useState(0)
    return (
        <button
            onClick={() => setCount(count + 1)}
        >
           <span
           role="img"
           aria-label={"like"}
           style={{marginRight: 8 }}>👍</span>
           <span>{count}</span>
        </button>
    );
}

export { LikesCounter };
