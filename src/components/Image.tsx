import React from 'react';

function Image(props: any) {
    return (
        <img
            className="Image"
            src={props.image.media_details.sizes.full.source_url}
            alt={props.image.title.rendered}
            height={props.image.media_details.sizes.full.height}
            width={props.image.media_details.sizes.full.width}
        />
    );
}

export { Image };
