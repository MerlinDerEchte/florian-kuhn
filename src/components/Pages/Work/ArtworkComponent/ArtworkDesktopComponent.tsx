import React, { FC, MouseEventHandler, useState } from "react";
import { IArtworkData } from "../../../../types/IArtworkData";
import { IImageData } from "../../../../types/IImageData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richtTextRendererOptions } from "../../../../utils/richTextRendererOptions";
import { useScreenWidthContext } from "../../../../contexts/screenWidthContext";
import LazyLoad from "react-lazyload";
import { GET_ARTOWRKS } from "../../../../queries/getArtworks";
import { GaleryComponent } from "../../../Shared/GaleryComponent";
type ArtworkDesktopProps = {
  artwork: IArtworkData;
  selectedArtwork: string;
  onSelectArtwork: (title: string) => void;
};

export const ArtworkDesktopComponent: FC<ArtworkDesktopProps> = ({
  artwork,
  selectedArtwork,
  onSelectArtwork,
}) => {
  const [showArtworkGalery, setShowArtworkGalery] = useState<boolean>(false);
  
  return (
    <section id={artwork.title} className="flex flex-initial flex-row w-3/4 items-stretch">
      {showArtworkGalery ? (
        <GaleryComponent
          images={artwork.images}
          handleClose={() => setShowArtworkGalery(false)}
        />
      ) : (
        ""
      )}
      <div className="flex-initial flex flex-col justify-start w-3/5 space-y-3">
        <h2 className="flex-initial text-xl ">{artwork.title}</h2>
        <div className="flex-1 text-base">
          {documentToReactComponents(
            artwork.description,
            richtTextRendererOptions
          )}
        </div>
        <div className="flex-initial flex flex-row-reverse px-10 ">
          {artwork.images.length > 0 ? (
            <span
              className="text-lg cursor-pointer text-blue-600"
              onClick={(e) => setShowArtworkGalery(true)}
            >
              Open galery
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex-initial w-2/5 flex flex-row justify-center items-start ">
        <LazyLoad height={800} offset={200} overflow scroll once placeholder="loading">
          <img
            className="cursor-pointer"
            src={artwork.images[0].url}
            onClick={(e) => setShowArtworkGalery(true)}
          />
        </LazyLoad>
      </div>
    </section>
  );
};
