import React, { FC, useState } from "react";
import { useScreenWidthContext } from "../../../contexts/screenWidthContext";
import { IArtworkData } from "../../../types/IArtworkData";
import { ArtworkDesktopComponent } from "./ArtworkList/ArtworkDesktopComponent";
import { ArtworkMobileComponent } from "./ArtworkList/ArtworkMobileComponent";
type ArtworkListProps = {
  artworks: IArtworkData[];
};

export const ArtworkListComponent: FC<ArtworkListProps> = ({ artworks }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<string>("");
  const onSelectArtwork = (title: string) => {
    if (selectedArtwork === title) {
      setSelectedArtwork("");
    } else {
      setSelectedArtwork(title);
    }
  };
  const { screenWidth } = useScreenWidthContext();
  return (
    <div className="flex-1 flex flex-col items-center space-y-2 md:space-y-20 overflow-y-scroll px-10 pb-32">
      {artworks.map((aw: IArtworkData) => {
        return (
          <>
            {screenWidth > 768 ? (
              <ArtworkDesktopComponent
                artwork={aw}
                selectedArtwork={selectedArtwork}
                onSelectArtwork={onSelectArtwork}
              />
            ) : (
              <ArtworkMobileComponent
                artwork={aw}
                selectedArtwork={selectedArtwork}
                onSelectArtwork={onSelectArtwork}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
