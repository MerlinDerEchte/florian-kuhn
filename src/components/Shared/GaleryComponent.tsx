import React, { FC, useState } from "react";
import { IImageData } from "../../types/IImageData";
import { ArtworkTitleListComponent } from "../Pages/Work/ArtworklTitleListComponent";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LazyLoad from "react-lazyload";
type GaleryComponentProps = {
  images: IImageData[];
  handleClose: () => void;
};

enum EImageSwitchDirection {
  FORWARD,
  BACKWARD,
}

const useStyles = makeStyles((theme: Theme) => ({
  clearIcon: {
    fontSize: 40,
  },
}));

export const GaleryComponent: FC<GaleryComponentProps> = ({
  images,
  handleClose,
}) => {
  const clearClass = useStyles();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const handleImagesSwitch = (dir: EImageSwitchDirection) => {
    if (dir === EImageSwitchDirection.FORWARD) {
      if (selectedImage === images.length - 1) {
        setSelectedImage(0);
        return;
      }
      setSelectedImage(selectedImage + 1);
    }
    if (dir === EImageSwitchDirection.BACKWARD) {
      if (selectedImage === 0) {
        setSelectedImage(images.length - 1);
        return;
      }
      setSelectedImage(selectedImage - 1);
    }
  };
  return (
    <div className="top-0 left-0 flex flex-col fixed h-screen w-screen bg-white justify-center items-center">
      <div
        className="absolute top-5 right-14 text-xl gray-900 cursor-pointer"
        onClick={(e) => handleClose()}
      >
        <ClearIcon className={clearClass.clearIcon} />
      </div>
      {images.length > 1 ? (
        <>
          <div className="absolute left-20 top-1/2 h-12 w-12 transform -translate-y-6 cursor-pointer">
            <div
              className="w-full h-full border-l-2 border-b-2 border-gray-300 transform rotate-45 hover:border-gray-500 "
              onClick={(e) => handleImagesSwitch(EImageSwitchDirection.FORWARD)}
            ></div>
          </div>
          <div className="absolute right-20 top-1/2 h-12 w-12 transform -translate-y-6 cursor-pointer">
            <div
              className="w-full h-full border-r-2 border-b-2 border-gray-300 transform -rotate-45 hover:border-gray-500 "
              onClick={(e) =>
                handleImagesSwitch(EImageSwitchDirection.BACKWARD)
              }
            ></div>
          </div>
        </>
      ) : (
        ""
      )}
        <div className="flex flex-initial h-4/5 w-4/5 flex flex-col justify-center items-center">
          <img
            className="h-full"
            src={images.length > 0 ? images[selectedImage].url : ""}
          />
        </div>
    </div>
  );
};
