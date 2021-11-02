import React, { FC, useState } from "react";
import { useScreenWidthContext } from "../../../contexts/screenWidthContext";
import { IArtworkData } from "../../../types/IArtworkData";
import { ArtworkDesktopComponent } from "./ArtworkComponent/ArtworkDesktopComponent";
import { ArtworkMobileComponent } from "./ArtworkComponent/ArtworkMobileComponent";
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

  const onSelectArtworkMobile = (title: string) => {
    onSelectArtwork(title);
    const renderTimeout = setTimeout(() => {
        document.getElementById(title)?.scrollIntoView({block: "start", behavior: "smooth"});
    }, 500)
  }
  const { screenWidth } = useScreenWidthContext();
  return (
    <div className="flex-1 h-full flex flex-col items-start space-y-2 md:space-y-20 overflow-y-scroll px-5 pb-32">
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
                onSelectArtwork={onSelectArtworkMobile}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
