import React, { ReactElement, FC, useEffect, useState } from "react"; // importing FunctionComponent
import { PageComponent } from "../PageComponent";
import { ArtworkTitleListComponent } from "./ArtworklTitleListComponent";
import { GET_ARTOWRKS } from "../../../queries/getArtworks";
import { useQuery } from "@apollo/client";
import { useScreenWidthContext } from "../../../contexts/screenWidthContext";
import { IArtworkData } from "../../../types/IArtworkData";
import {ArtworkListComponent} from './ArtworkListComponent';

export const WorkComponent: FC<any> = () => {
  const { loading, error, data } = useQuery(GET_ARTOWRKS);
  const { screenWidth } = useScreenWidthContext();
  const [artworks, setArtworks] = useState<IArtworkData[]>([]);

  useEffect(() => {
    if (data) {
      const artworks: IArtworkData[] = [];

      for (let aw of data.artworkCollection.items) {
        const title = aw.title;
        const description = aw.description.json;
        const images = aw.picturesCollection.items.map((pic: any) => ({
          title: pic.title,
          url: pic.url,
        }));
        const createDate = new Date(aw.creationDate);

        artworks.push({
          title: title,
          description: description,
          images: images,
          creationDate: createDate,
        });
      }
      artworks.sort((a: IArtworkData, b: IArtworkData) => {
        return a.creationDate.getTime() - b.creationDate.getTime();
      });
      setArtworks(artworks);
    }
  }, [data]);
  
  useEffect(()=>{

  },[screenWidth])
  const titles: string[] = artworks.map((aw: IArtworkData) => aw.title);
  return (
    <PageComponent title="Work">
      <div className="flex-initial h-full flex flex-row pt-10">
        {screenWidth > 768 ? <ArtworkTitleListComponent titles={titles} /> : ""}
        <ArtworkListComponent artworks = {artworks} />
      </div>
    </PageComponent>
  );
};
