import React, { FC } from "react";
import { IArtworkData } from "../../../../types/IArtworkData";
import { IImageData } from "../../../../types/IImageData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richtTextRendererOptions } from "../../../../utils/richTextRendererOptions";
import { useScreenWidthContext } from "../../../../contexts/screenWidthContext";
import LazyLoad from "react-lazyload";
type ArtworkMobileProps = {
  artwork: IArtworkData;
  selectedArtwork: string;
  onSelectArtwork: (title: string) => void;
};

export const ArtworkMobileComponent: FC<ArtworkMobileProps> = ({
  artwork,
  selectedArtwork,
  onSelectArtwork,
}) => {
  const { screenWidth } = useScreenWidthContext();
  return (
    <section id={artwork.title} className="flex flex-1 flex-col w-full space-y-3">
      <header
        className="flex flex-initial h-20 text-xl leading-none"
        onClick={(e) => onSelectArtwork(artwork.title)}
      >
        {artwork.title}
      </header>
      {selectedArtwork === artwork.title && screenWidth <= 768 && 
      
      <div
        className="flex flex-1 flex-col space-y-5 overflow-hidden"
      >
        <div className="flex flex-1 flex-col space-y-3">
          {documentToReactComponents(
            artwork.description,
            richtTextRendererOptions
          )}
        </div>
        <div className="flex flex-1 flex-col space-y-10 pb-16 items-start">
          {artwork.images.map((pic: IImageData) => {
            return (
                <div className=" flex flex-col justify-center">
                  <img className="full" src={pic.url}></img>
                </div>
              
            );
          })}
        </div>
      </div>
}
    </section>
  );
};
