import React from 'react';

function Image(props) {
    return (
        <img
            src={props.image.media_details.sizes.large.source_url}
            alt={props.image.title.rendered}
            height={props.image.media_details.sizes.large.height}
            width={props.image.media_details.sizes.large.width}
            style={{ height: "auto", maxWidth: "100%" }}
        />
    );
}

export { Image };
