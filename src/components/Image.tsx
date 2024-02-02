import React from "react";
import type { Media } from "../client/types/media";

function Image({ image }: { image: Media }) {
  const { source_url, height, width } = image.media_details.sizes.full;
  return (
    <img
      className="Image"
      src={source_url}
      height={height}
      width={width}
      alt={image.title.rendered}
    />
  );
}

export { Image };
