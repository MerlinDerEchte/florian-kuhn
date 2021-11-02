import React, { ReactElement, FC, useEffect, useState } from "react"; // importing FunctionComponent
import { PageComponent } from "../PageComponent";
import { GET_VITA } from "../../../queries/getVita";
import { useQuery } from "@apollo/client";
import { richtTextRendererOptions } from "../../../utils/richTextRendererOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, EMPTY_DOCUMENT } from "@contentful/rich-text-types";

 interface IVitaData {
    content: Document;
    portraitUrl: string;
  }



export const VitaComponent: FC<any> = () => {
  const { loading, error, data } = useQuery(GET_VITA);

  const [vitaData, setVitaData] = useState<IVitaData>({
    content: EMPTY_DOCUMENT,
    portraitUrl: "",
  });

  useEffect(() => {
    if (data) {
      const content: Document = data.vitaModel.vitatext.json;
      console.log(content);
      const portraitUrl: string = data.vitaModel.portrait.url;
      setVitaData({ content: content, portraitUrl: portraitUrl });
    }
  }, [data]);

  return (
    <PageComponent title="Vita">
      <div className=" flex overflow-y-auto flex-col  md:flex-row justify-start">
        <div className="flex-1 order-2 flex flex-col md:order-1 space-y-5 text-base">
          {vitaData.content !== EMPTY_DOCUMENT
            ? documentToReactComponents(
                vitaData.content,
                richtTextRendererOptions
              )
            : ""}
        </div>
        <div className="flex-1 order-1 md:order-2 flex flex-row justify-center ">
          {vitaData.portraitUrl ? (
           
              <img src={vitaData.portraitUrl} className="w-96"></img>
           
          ) : (
            "loading"
          )}
        </div>
      </div>
    </PageComponent>
  );
};
