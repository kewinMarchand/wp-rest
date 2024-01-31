import React from 'react';

function Image(props: any) {
    const {source_url, height, width}  = props.image.media_details.sizes.full;
    return (
        <img
            className="Image"
            src={source_url}
            height={height}
            width={width}
            alt={props.image.title.rendered}
        />
    );
}

export { Image };
